
import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import { GlassmorphicCard } from "./ui/glasscard";
import { Sparkles, Brain } from "lucide-react";
import { FormWizard } from '../archives/FormWizard';
import { MultiStepLoader as Loader} from "./ui/multi-step-loader";
import ChatBox from "./ChatBox";

function Dashboard() {
  const { theme } = useContext(ThemeContext);
  const [showChatBox, setShowChatBox] = useState(false);
  const [showFormWizard, setShowFormWizard] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handlePromptMyselfClick = () => {
    setShowChatBox(true);
    navigate('?q=new');
  };

  const handleCreateComponentClick = () => {
    setShowFormWizard(true);
  };

  const questions = [
    {
      id: 1,
      question: "What is the component type?",
      placeholder: "e.g., Button, Card, Navbar",
      type: "text",
      required: true,
    },
    {
      id: 2,
      question: "Which programming language are you using?",
      placeholder: "e.g., JavaScript, TypeScript",
      type: "text",
      required: true,
    },
    {
      id: 3,
      question: "Which framework are you using?",
      placeholder: "e.g., React, Vue, Angular",
      type: "text",
      required: true,
    },
  ];

  const handleFormSubmit = (answers) => {
    console.log('Form submitted:', answers);
    // Process the answers here
    setLoading(true);
  };

  const loadingStates = [
    { text: "Processing your answers" },
    { text: "Generating the component" },
    { text: "Finalizing" },
  ];

  return (
    <div className="flex flex-1">
      <div className={`p-2 md:p-10 rounded-tl-2xl border border-neutral-200 dark:border-neutral-700 ${
          theme === "dark" ? "bg-neutral-950" : "bg-white"
        } dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full`}>
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center gap-3">
            <Brain className="w-12 h-12 text-red-400" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-400 to-green-400 bg-clip-text text-transparent">
              Watermelon AI
            </h1>
          </div>
        </div>
        {showChatBox ? (
          <ChatBox />
        ) : showFormWizard ? (
          <FormWizard
            questions={questions}
            onSubmit={handleFormSubmit}
            navFooter={true}
          />
        ) : (
          <div className="h-[100vh] flex items-center justify-center">
            <GlassmorphicCard
              backgroundColor="bg-gradient-to-br from-[#ff7e5f] via-[#feb47b] to-[#ff7e5f]"
              onClick={handlePromptMyselfClick}
            >
              <div className="h-full w-full p-8 flex flex-col items-center justify-center text-white">
                <Sparkles className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  Want to prompt my self
                </h2>
                <p className="text-center text-white/80">
                  You have to prompt yourself to create a components!!!
                </p>
              </div>
            </GlassmorphicCard>
            <GlassmorphicCard
              backgroundColor="bg-gradient-to-br from-[#43cea2] via-[#185a9d] to-[#43cea2]"
              onClick={handleCreateComponentClick}
            >
              <div className="h-full w-full p-8 flex flex-col items-center justify-center text-white">
                <Sparkles className="w-12 h-12 mb-4" />
                <h2 className="text-2xl font-bold mb-4">
                  Create a component more customized
                </h2>
                <p className="text-center text-white/80">
                  You can create a component more customized by providing some
                  simple answers!
                </p>
              </div>
            </GlassmorphicCard>
          </div>
        )}
        {loading && (
          <Loader
            loadingStates={loadingStates}
            loading={loading}
            duration={2000}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
