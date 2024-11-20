import { useState } from 'react';
import { FiSend, FiMic, FiImage } from 'react-icons/fi';
import ChatContainer from './ChatContainer.jsx'

const MainContent = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [showWelcome, setShowWelcome] = useState(true);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      isUser: true,
    };
    setMessages(prev => [...prev, userMessage]);

    // Simulate ChatGPT response
    const botResponse = {
      id: Date.now() + 1,
      content: "Sure, here's a simple JavaScript code snippet that prompts the user for their name and then greets them:",
      isUser: false,
      codeSnippet: `// Prompt the user for their name
var name = prompt("What's your name?");

// Greet the user
alert("Hello, " + name + "! Welcome to our website!");`
    };

    setTimeout(() => {
      setMessages(prev => [...prev, botResponse]);
    }, 1000);

    setInputValue('');
    setShowWelcome(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {showWelcome ? (
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">How can i help you today?</h1>
            <p className="text-gray-400 mb-8 text-sm sm:text-base px-4">
              This code will display a prompt asking the user for their name, and then it will display a greeting message with the name entered by the user.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 px-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiSend className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Saved Prompt Templates</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Users save and reuse prompt templates for faster responses.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiImage className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Media Type Selection</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Users select media type for tailored interactions.</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="flex justify-center mb-2">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <FiMic className="text-white" />
                  </div>
                </div>
                <h3 className="text-white font-medium mb-1 text-sm sm:text-base">Multilingual Support</h3>
                <p className="text-gray-400 text-xs sm:text-sm">Choose language for better interaction.</p>
              </div>
            </div>

            <div className="flex justify-center space-x-2 sm:space-x-4 mb-8 overflow-x-auto px-4 text-sm sm:text-base">
              <button className="text-green-500 hover:text-white whitespace-nowrap">All</button>
              <button className="text-gray-400 hover:text-white whitespace-nowrap">Text</button>
              <button className="text-gray-400 hover:text-white whitespace-nowrap">Image</button>
              <button className="text-gray-400 hover:text-white whitespace-nowrap">Video</button>
              <button className="text-gray-400 hover:text-white whitespace-nowrap">Music</button>
              <button className="text-gray-400 hover:text-white whitespace-nowrap">Analytics</button>
            </div>
          </div>
        </div>
      ) : (
        <ChatContainer messages={messages} />
      )}

      <div className="p-4">
        <div className="flex">
          <div className="flex-1 bg-gray-800 rounded-lg flex items-center p-2">
            <img src="/logo.png" alt="Logo" className="w-6 h-6 mr-2" />
            <input
              type="text"
              className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm sm:text-base min-w-0"
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 hover:bg-green-600"
              onClick={handleSend}
            >
              <FiSend className="text-white" />
            </button>
          </div>
        </div>
        <div className="text-center mt-2">
          <p className="text-gray-500 text-xs sm:text-sm">Watermelon can make mistakes. Consider checking important information.</p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
