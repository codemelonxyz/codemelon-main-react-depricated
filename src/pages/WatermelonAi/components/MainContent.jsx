import { useState, useContext } from "react";
import { ThemeContext } from "../../../ThemeContext.js";
import { MultiStepLoader as Loader } from "../../../components/ui/multi-step-loader.jsx";
import { IconSquareRoundedX, IconRobotFace, IconChevronLeft } from "@tabler/icons-react"; // Import back icon
import WelcomeContent from "./WelcomeContent.jsx";
import InputArea from "./InputArea.jsx";
import { FormWizard } from "../../../components/FormWizard/FormWizard.jsx";
import ChatContainer from "./ChatContainer.jsx"; // Import ChatContainer
import { useNavigate } from "react-router-dom";

const MainContent = () => {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([]); // Corrected 'message' to 'messages'
  const [inputValue, setInputValue] = useState("");
  const [showWelcome, setShowWelcome] = useState(true);
  const [showFormWizard, setShowFormWizard] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadingStates = [
    {
      text: "Buying a condo",
    },
    {
      text: "Travelling in a flight",
    },
    {
      text: "Meeting Tyler Durden",
    },
  ];

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

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex items-center p-4">
        <button onClick={handleBack}>
          <IconChevronLeft className="h-6 w-6 text-white" />
        </button>
        <h1 className="ml-2 text-lg font-semibold text-white">Header Title</h1>
      </div>
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {showFormWizard ? (
        <FormWizard
          logo={<IconRobotFace />}
          title="Generate Code Snippet"
          questions={questions}
          onSubmit={() => setLoading(true)}
          theme={theme}
        />
      ) : !loading && messages.length === 0 && (
        <WelcomeContent handleGenerate={handleGenerate} />
      )}
      {!loading && messages.length > 0 && (
        <ChatContainer messages={messages} /> // Use ChatContainer to display messages
      )}
      {loading && (
        <button
          className="fixed top-4 right-4 text-black dark:text-white z-[120]"
          onClick={() => setLoading(false)}
        >
          <IconSquareRoundedX className="h-10 w-10" />
        </button>
      )}
      <InputArea
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleSend={handleSend}
        handleKeyPress={handleKeyPress}
      />
    </div>
  );
};

export default MainContent;
