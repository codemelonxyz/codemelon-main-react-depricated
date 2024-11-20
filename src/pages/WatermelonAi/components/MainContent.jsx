import { useState, useContext } from "react";
import { FiSend, FiMic, FiImage } from "react-icons/fi";
import ChatContainer from "./ChatContainer.jsx";
// Import FormWizard from the components folder
import { FormWizard } from "../../../components/FormWizard/FormWizard.jsx";
import { ThemeContext } from "../../../ThemeContext.js";

const MainContent = () => {
  const {theme} = useContext(ThemeContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFormWizard, setShowFormWizard] = useState(false);

  const questions = [
    {
      id: 1,
      name: "componentType",
      text: "What is the component type?",
      type: "text",
      placeholder: "e.g., Button, Card, Navbar",
      required: true,
    },
    {
      id: 2,
      name: "programmingLanguage",
      text: "Which programming language are you using?",
      type: "text",
      placeholder: "e.g., JavaScript, TypeScript",
      required: true,
    },
    {
      id: 3,
      name: "framework",
      text: "Which framework are you using?",
      type: "text",
      placeholder: "e.g., React, Vue, Angular",
      required: true,
    },
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate ChatGPT response
    const botResponse = {
      id: Date.now() + 1,
      content:
        "Sure, here's a simple JavaScript code snippet that prompts the user for their name and then greets them:",
      isUser: false,
      codeSnippet: `// Prompt the user for their name
var name = prompt("What's your name?");

// Greet the user
alert("Hello, " + name + "! Welcome to our website!");`,
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
    setShowWelcome(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleGenerate = () => {
    setShowFormWizard(true);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {showFormWizard ? (
        // Render FormWizard when showFormWizard is true
        <FormWizard
          questions={questions}
          onSubmit={()=>console.log("clicked")}
          theme={theme}
        />
      ) : (
        // ...existing welcome content...
        <div className="flex-1 flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Logo" className="w-12 h-12" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
              How can i help you today?
            </h1>
            <p className="text-gray-400 mb-8 text-sm sm:text-base px-4">
              This code will display a prompt asking the user for their name,
              and then it will display a greeting message with the name entered
              by the user.
            </p>

            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <FiSend className="text-white text-2xl" />
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-2">
                Generate a Better Component
              </h3>
              <p className="text-gray-400 mb-4">
                Get more customized data and improve your component with just
                one click.
              </p>
              <div className="flex justify-center">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 flex items-center justify-center"
                  onClick={handleGenerate}
                >
                  <span className="mr-2">Generate</span>
                  <FiSend />
                </button>
              </div>
            </div>
          </div>
        </div>
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
          <p className="text-gray-500 text-xs sm:text-sm">
            Watermelon can make mistakes. Consider checking important
            information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
