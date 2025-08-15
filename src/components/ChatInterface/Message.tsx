import React from 'react';
import { Message as MessageType } from '../../types';
import ProjectList from '../ProjectList/ProjectList';
import TestimonialsCarousel from '../TestimonialsCarousel/TestimonialsCarousel';

interface MessageProps {
  message: MessageType;
}

const Message: React.FC<MessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-lg ${isUser ? 'order-2' : 'order-1'}`}>
        {!isUser && (
          <div className="flex items-center mb-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white text-sm font-medium">A</span>
            </div>
            <span className="text-sm font-medium text-gray-300">Angelo's AI Assistant</span>
          </div>
        )}
        <div
          className={`px-4 py-3 rounded-2xl ${
            isUser
              ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white ml-auto shadow-lg'
              : 'bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-100'
          }`}
        >
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
        </div>
        {message.showProjects && !isUser && (
          <div className="mt-4 w-full max-w-4xl">
            <ProjectList />
          </div>
        )}
        {message.showTestimonials && !isUser && (
          <div className="mt-4 w-full max-w-4xl">
            <TestimonialsCarousel />
          </div>
        )}
        {isUser && (
          <div className="text-right mt-1">
            <span className="text-xs text-gray-500">
              {message.timestamp.toLocaleTimeString([], { 
                hour: '2-digit', 
                minute: '2-digit' 
              })}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Message;