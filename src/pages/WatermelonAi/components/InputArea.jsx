
import { FiSend } from "react-icons/fi";

const InputArea = ({ inputValue, setInputValue, handleSend, handleKeyPress }) => (
  <div className="p-4">
    <div className="flex">
      <div className="flex-1 bg-gray-800 rounded-lg flex items-center p-2">
        <img src="/nobackgroundlogo.png" alt="Logo" className="w-6 h-6 mr-2" />
        <input
          type="text"
          className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm sm:text-base min-w-0"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="w-8 h-8 bg-[#7680af] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#525c8c]"
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
);

export default InputArea;
