export interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  showProjects?: boolean;
  showTestimonials?: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
}