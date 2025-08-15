import React, { useEffect, useRef, useState } from 'react';
import { Message as MessageType } from '../../types';
import Message from './Message';
import ProjectList from '../ProjectList/ProjectList';

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
  onQuestionClick?: (question: string) => void;
  askedQuestions?: string[];
}

const MessageList: React.FC<MessageListProps> = ({ messages, isLoading, onQuestionClick, askedQuestions = [] }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [lastActivityTime, setLastActivityTime] = useState(Date.now());

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
    setLastActivityTime(Date.now());
    setShowRecommendations(false);
  }, [messages]);

  // Show recommendations after 10 seconds of inactivity
  useEffect(() => {
    if (messages.length === 0) return;

    const timer = setTimeout(() => {
      setShowRecommendations(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, [lastActivityTime, messages.length]);

  const recommendedQuestions = [
    "What technologies does Angelo work with?",
    "Tell me about Angelo's WordPress experience",
    "Show me website examples",
    "How does Angelo use AI in development?",
    "What's Angelo's experience with e-commerce?",
    "Tell me about Angelo's security expertise"
  ];

  const handleQuestionClick = (question: string) => {
    setShowRecommendations(false);
    if (onQuestionClick) {
      onQuestionClick(question);
    }
  };

  // Filter out already asked questions
  const availableQuestions = recommendedQuestions.filter(
    question => !askedQuestions.includes(question)
  );

  const RecommendedQuestions = ({ className = "" }) => (
    <div className={`max-w-3xl mx-auto ${className}`}>
      <p className="text-gray-400 mb-6 text-sm text-center">Need more ideas? Try asking:</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {availableQuestions.map((question, index) => (
          <button
            key={index}
            onClick={() => handleQuestionClick(question)}
            className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600 text-gray-200 px-4 py-3 rounded-xl text-sm text-left transition-all duration-200"
          >
            {question}
          </button>
        ))}
      </div>
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-xs">Or type your own question in the input below</p>
      </div>
    </div>
  );

  return (
    <div className="flex-1 px-4 py-8">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6 shadow-lg">
            <span className="text-white text-2xl font-medium">A</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Hi! I'm Angelo's AI Assistant</h1>
          <p className="text-gray-300 text-lg mb-12 max-w-lg leading-relaxed">Ask me anything about Angelo's background, skills, projects, and experience. I'm here to help!</p>
          
          <div className="w-full">
            <p className="text-gray-400 mb-6 text-sm">Try asking:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-12">
              {recommendedQuestions.map((question, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(question)}
                  className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-700/60 hover:border-gray-600 text-gray-200 px-4 py-3 rounded-xl text-sm text-left transition-all duration-200"
                >
                  {question}
                </button>
              ))}
            </div>
            
            {/* Projects Showcase */}
            <div className="mt-12">
              <ProjectList />
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto min-h-full">
          <div className="space-y-6">
            {messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          
          {showRecommendations && availableQuestions.length > 0 && (
            <div className="pt-8 mt-8 border-t border-gray-700/30">
              <RecommendedQuestions />
            </div>
          )}
          
          {/* Add spacing for better scroll experience */}
          <div className="h-32"></div>
        </div>
      )}
      
      {isLoading && (
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-start mb-6">
            <div className="max-w-xs lg:max-w-lg">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <span className="text-sm font-medium text-gray-300">Angelo's AI Assistant</span>
              </div>
              <div className="bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default MessageList;