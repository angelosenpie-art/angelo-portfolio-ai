import { useState } from 'react'
import './App.css'
import ChatInterface from './components/ChatInterface/ChatInterface'
import ContactForm from './components/ContactForm/ContactForm'

function App() {
  const [showContactForm, setShowContactForm] = useState(false)
  const [messageCount, setMessageCount] = useState(0)

  const handleMessageSent = () => {
    setMessageCount(prev => prev + 1)
  }

  const handleShowContactForm = () => {
    setShowContactForm(true)
  }

  return (
    <div className="min-h-screen bg-black relative flex flex-col">
      {/* Circular gradient backgrounds */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-orange-500/20 via-orange-600/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-radial from-blue-500/15 via-blue-600/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-radial from-purple-500/12 via-purple-600/6 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="flex-1 relative z-10">
        <ChatInterface 
          onMessageSent={handleMessageSent}
          messageCount={messageCount}
          onShowContactForm={handleShowContactForm}
        />
      </div>
      
      {showContactForm && (
        <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-4 border-b border-gray-700 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">Contact Angelo</h3>
              <button 
                onClick={() => setShowContactForm(false)}
                className="text-gray-400 hover:text-gray-200 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="p-4">
              <ContactForm />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App