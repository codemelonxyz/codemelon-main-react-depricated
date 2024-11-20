import { useState, useContext } from "react";
import { ThemeContext } from "../../../ThemeContext.js";
import { MultiStepLoader as Loader } from "../../../components/ui/multi-step-loader.jsx";
import { IconSquareRoundedX } from "@tabler/icons-react";
import WelcomeContent from "./WelcomeContent.jsx";
import InputArea from "./InputArea.jsx";
import { FormWizard } from "../../../components/FormWizard/FormWizard.jsx";

const MainContent = () => {
  const { theme } = useContext(ThemeContext);
  const [message, setMessages] = useState([]);
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

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {showFormWizard ? (
        // Render FormWizard when showFormWizard is true
        <FormWizard
          questions={questions}
          onSubmit={() => setLoading(true)}
          theme={theme}
        />
      ) : (
        <WelcomeContent handleGenerate={handleGenerate} />
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
