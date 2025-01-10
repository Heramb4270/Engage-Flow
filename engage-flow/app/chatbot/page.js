'use client'

import { useState, useEffect, useRef } from 'react'
import { Settings, Bell, PieChart, BarChart, LineChart, Users, Mic, Paperclip, Send } from 'lucide-react'
import Navbar from '@/components/Navbar';



// Utility function for API calls
async function sendMessage(message) {
  try {
    const response = await fetch('/api/langflow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message })
      
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    return data.response;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export default function AnalyticsChatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    try {
      setIsLoading(true);
      
      // Add user message
      const userMessage = { role: 'user', content: input.trim() };
      setMessages(prev => [...prev, userMessage]);
      setInput('');

      // Get AI response
      const response = await sendMessage(input.trim());
      
      // Add AI message
      const aiMessage = { role: 'assistant', content: response };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      // Add error message
      const errorMessage = { 
        role: 'assistant', 
        content: 'Sorry, I encountered an error processing your request. Please try again.'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    
    <div className="flex flex-col h-screen bg-gray-50 ">
      {/* Header */}
      <Navbar />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4" ref={scrollRef}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            } mb-4`}
          >
            <div 
              className={`flex ${
                message.role === 'user' ? 'flex-row-reverse' : 'flex-row'
              } items-end`}
            >
              <div className={`w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center ${
                message.role === 'user' ? 'ml-2' : 'mr-2'
              }`}>
                <span className="text-sm font-medium text-gray-600">
                  {message.role === 'user' ? 'I' : 'AI'}
                </span>
              </div>
              <div
                className={`max-w-md p-4 rounded-lg ${
                  message.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white border text-black border-gray-200'
                }`}
              >
                {message.content}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
        <div className="flex items-end space-x-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your social media analytics..."
            className="flex-1 min-h-[80px] p-3 border rounded-lg text text-black resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
          />
          <div className="flex space-x-2">
            
           
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50"
              disabled={isLoading}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
    
  )
}