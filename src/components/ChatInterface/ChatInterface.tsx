import React, { useState } from 'react';
import { Message, ChatState } from '../../types';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { generateResponse } from '../../services/geminiService';

interface ChatInterfaceProps {
  onMessageSent: () => void;
  messageCount: number;
  onShowContactForm: () => void;
}

const ChatInterface: React.FC<ChatInterfaceProps> = ({ 
  onMessageSent, 
  messageCount, 
  onShowContactForm 
}) => {
  const [chatState, setChatState] = useState<ChatState>({
    messages: [],
    isLoading: false,
  });
  const [askedQuestions, setAskedQuestions] = useState<string[]>([]);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const getAIResponse = async (userMessage: string): Promise<{ response: string; showProjects: boolean; showTestimonials: boolean }> => {
    // Check if user is asking about contact or wants to get in touch
    const contactKeywords = ['contact', 'email', 'hire', 'work together', 'get in touch', 'reach out', 'collaborate'];
    const isContactRequest = contactKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isContactRequest) {
      onShowContactForm();
      return {
        response: "Great! I've shown the contact form below where you can reach out to Angelo directly. Feel free to send him a message about your project or opportunity!",
        showProjects: false,
        showTestimonials: false
      };
    }

    // Check if user is asking for testimonials
    const testimonialKeywords = ['testimonials', 'reviews', 'feedback', 'client testimonials', 'show me testimonials', 'what clients say', 'client reviews', 'testimonials from clients'];
    const isTestimonialRequest = testimonialKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isTestimonialRequest) {
      return {
        response: "Here are testimonials from my satisfied clients on Upwork. These reviews showcase the quality of work and client satisfaction I consistently deliver:",
        showProjects: false,
        showTestimonials: true
      };
    }

    // Check if user is asking for website examples
    const websiteKeywords = ['website examples', 'show me websites', 'portfolio sites', 'website portfolio', 'sites you built', 'websites you made', 'show websites', 'your work', 'examples of work', 'live sites', 'demo sites'];
    const isWebsiteRequest = websiteKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isWebsiteRequest) {
      return {
        response: "Here are some of the websites I've built for clients across different industries. Each project showcases different capabilities and technologies:",
        showProjects: true,
        showTestimonials: false
      };
    }

    const response = await generateResponse(userMessage);
    
    // Add contact recommendation after 2 messages
    if (messageCount >= 1) {
      return {
        response: response + "\n\n💡 Interested in working with Angelo? Feel free to ask me to show you the contact form!",
        showProjects: false,
        showTestimonials: false
      };
    }
    
    return {
      response,
      showProjects: false,
      showTestimonials: false
    };
  };

  const handleSendMessage = async (content: string) => {
    onMessageSent();
    
    // Track asked questions for filtering recommendations
    setAskedQuestions(prev => {
      if (!prev.includes(content)) {
        return [...prev, content];
      }
      return prev;
    });

    const userMessage: Message = {
      id: generateId(),
      content,
      role: 'user',
      timestamp: new Date(),
    };

    setChatState(prev => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      isLoading: true,
    }));

    try {
      const { response: aiResponse, showProjects, showTestimonials } = await getAIResponse(content);
      
      const assistantMessage: Message = {
        id: generateId(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
        showProjects,
        showTestimonials,
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        isLoading: false,
      }));
    } catch (error) {
      console.error('Error getting AI response:', error);
      
      const errorMessage: Message = {
        id: generateId(),
        content: "I'm sorry, I encountered an error. Please try again.",
        role: 'assistant',
        timestamp: new Date(),
      };

      setChatState(prev => ({
        ...prev,
        messages: [...prev.messages, errorMessage],
        isLoading: false,
      }));
    }
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="w-full min-h-screen min-h-dvh max-w-3xl mx-auto flex flex-col bg-transparent">
      <MessageList 
        messages={chatState.messages} 
        isLoading={chatState.isLoading}
        onQuestionClick={handleQuestionClick}
        askedQuestions={askedQuestions}
      />
      <div className="sticky bottom-0 bg-black/80 backdrop-blur-sm">
        <MessageInput 
          onSendMessage={handleSendMessage} 
          disabled={chatState.isLoading} 
        />
      </div>
    </div>
  );
};

export default ChatInterface;