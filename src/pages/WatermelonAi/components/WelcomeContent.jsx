
import { FiSend } from "react-icons/fi";

const WelcomeContent = ({ handleGenerate }) => (
  <div className="flex-1 flex items-center justify-center p-4">
    <div className="max-w-2xl w-full text-center">
      <div className="flex justify-center mb-4">
        <img src="/nobackgroundlogo.png" alt="Logo" className="w-12 h-12" />
      </div>
      <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">
        How can I help you today?
      </h1>
      <p className="text-gray-400 mb-8 text-sm sm:text-base px-4">
        This code will display a prompt asking the user for their name,
        and then it will display a greeting message with the name entered
        by the user.
      </p>
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-4">
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
            className="bg-[#7680af] text-white px-4 py-2 rounded-full hover:bg-[#525c8c] flex items-center justify-center"
            onClick={handleGenerate}
          >
            <span className="mr-2">Generate</span>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default WelcomeContent;
