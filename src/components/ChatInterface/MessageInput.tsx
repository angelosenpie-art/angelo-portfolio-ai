import React, { useState, KeyboardEvent } from 'react';

interface MessageInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage, disabled = false }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() && !disabled) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="p-4">
      <div className="flex items-end space-x-3 max-w-3xl mx-auto">
        <div className="flex-1 relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me anything about Angelo..."
            className="w-full min-h-[52px] max-h-32 px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl focus:outline-none focus:bg-gray-700/60 focus:border-gray-600 resize-none text-white placeholder-gray-400 transition-all"
            disabled={disabled}
            rows={1}
          />
        </div>
        <button
          onClick={handleSend}
          disabled={!input.trim() || disabled}
          className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full hover:from-orange-600 hover:to-red-600 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center shadow-lg"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="m22 2-7 20-4-9-9-4Z"/>
            <path d="M22 2 11 13"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MessageInput;