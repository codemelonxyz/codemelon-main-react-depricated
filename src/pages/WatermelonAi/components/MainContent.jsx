import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../../../ThemeContext.js";
import { MultiStepLoader as Loader } from "../../../components/ui/multi-step-loader.jsx";
import {
  IconSquareRoundedX,
  IconRobotFace,
  IconChevronLeft,
} from "@tabler/icons-react"; // Import back icon
import WelcomeContent from "./WelcomeContent.jsx";
import InputArea from "./InputArea.jsx";
import { FormWizard } from "../../../components/FormWizard/FormWizard.jsx";
import ChatContainer from "./ChatContainer.jsx"; // Import ChatContainer
import { useNavigate } from "react-router-dom";
import WatermelonAPI from "../../../services/watermelon.api.js";
import { useAuth } from "../../../contexts/AuthContext.jsx";

const MainContent = ({ currentId, currentChat }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [showFormWizard, setShowFormWizard] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showComponent, setShowComponent] = useState(false);

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

  const [questions, setQuestions] = useState([
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
  ]);

  const convertQuestions = (jsonObject) => {
    return Object.keys(jsonObject).map((key, index) => {
      return {
        id: index + 1,
        name: key,
        text: jsonObject[key],
        type: "text",
        placeholder: "",
        required: true,
      };
    });
  };

  useEffect(() => {
    try{
      const getMessages = async () => {
        if (!currentId) return;
        const response = await WatermelonAPI.getChat(
          currentId,
          token.token
        );
        console.log(response.chat.data)
        const messages = response.chat.data.map((message) => {
          return {
            id: Date.now() + Math.random(),
            content: message.watermelon || message.user,
            isUser: !message.watermelon,
          };
        });
        setMessages(messages);
      };
      getMessages();
    }
    catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [currentId, token.token]);


  const handleSend = async () => {
    if (!inputValue.trim()) return;
    const response = await WatermelonAPI.sendMessage(
      "codePrompt",
      currentId,
      token.token,
      inputValue
    );
    const userMessage = {
      id: Date.now(),
      content: inputValue,
      isUser: true,
    };
    setMessages((prev) => [...prev, userMessage]);
    const botResponse = {
      id: Date.now() + 1,
      content: response.data,
      isUser: false,
    };
    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInputValue("");
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

  const handleFormWizardSubmit = async (answers) => {
    setShowFormWizard(false);
    setLoading(true);
    if (showComponent) {
      const response = await WatermelonAPI.sendMessage(
        "questionPrompt",
        currentId,
        token.token,
        answers
      );
      const userMessage = {
        id: Date.now(),
        content: answers,
        isUser: true,
      };
      const botMessage = {
        id: Date.now() + 1,
        content: response.data,
        isUser: false,
      };
      setMessages((prev) => [...prev, userMessage, botMessage]);
    } else {
      const questionsResponse = await WatermelonAPI.getQuestions(
        currentId,
        token.token,
        answers
      );
      const newQuestions = convertQuestions(JSON.parse(questionsResponse.data));
      setQuestions(newQuestions);
      setShowFormWizard(true);
    }
    setLoading(false);
    setShowComponent(true);
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      <div className="flex items-center p-4">
        <button onClick={handleBack}>
          <IconChevronLeft className="h-6 w-6 text-white" />
        </button>
        <h1 className="ml-2 text-lg font-semibold text-white">{currentId}</h1>
      </div>
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {showFormWizard ? (
        <FormWizard
          logo={<IconRobotFace />}
          title="Generate Code Snippet"
          questions={questions}
          onSubmit={handleFormWizardSubmit}
          theme={theme}
        />
      ) : showComponent ? (
        <ChatContainer messages={messages} />
      ) : (
        !loading &&
        messages.length === 0 && (
          <WelcomeContent handleGenerate={handleGenerate} />
        )
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
