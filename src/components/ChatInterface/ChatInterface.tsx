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

  const getAIResponse = async (userMessage: string): Promise<string> => {
    // Check if user is asking about contact or wants to get in touch
    const contactKeywords = ['contact', 'email', 'hire', 'work together', 'get in touch', 'reach out', 'collaborate'];
    const isContactRequest = contactKeywords.some(keyword => 
      userMessage.toLowerCase().includes(keyword)
    );

    if (isContactRequest) {
      onShowContactForm();
      return "Great! I've shown the contact form below where you can reach out to Angelo directly. Feel free to send him a message about your project or opportunity!";
    }

    const response = await generateResponse(userMessage);
    
    // Add contact recommendation after 2 messages
    if (messageCount >= 1) {
      return response + "\n\n💡 Interested in working with Angelo? Feel free to ask me to show you the contact form!";
    }
    
    return response;
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
      const aiResponse = await getAIResponse(content);
      
      const assistantMessage: Message = {
        id: generateId(),
        content: aiResponse,
        role: 'assistant',
        timestamp: new Date(),
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
    <div className="w-full min-h-screen max-w-3xl mx-auto flex flex-col">
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