import { FiSend } from "react-icons/fi";

const InputArea = ({ inputValue, setInputValue, handleSend, handleKeyPress }) => (
  <div className="p-4 transition-transform duration-300">
    <div className="text-center mt-2">
      <p className="text-gray-500 text-xs sm:text-sm">
        Watermelon can make mistakes. Consider checking important
        information.
      </p>
    </div>
    <div className="flex">
      <div className="flex-1 bg-gray-800 rounded-lg flex items-center p-2 transition duration-300 hover:bg-gray-700">
        <img src="/nobackgroundlogo.png" alt="Logo" className="w-6 h-6 mr-2 transform transition-transform duration-300 hover:rotate-12" />
        <input
          type="text"
          className="flex-1 bg-transparent border-none focus:outline-none text-white text-sm sm:text-base min-w-0 transition border-b-2 border-transparent focus:border-blue-500"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="w-8 h-8 bg-[#7680af] rounded-full flex items-center justify-center flex-shrink-0 hover:bg-[#525c8c] transition transform duration-300 hover:scale-110"
          onClick={handleSend}
        >
          <FiSend className="text-white" />
        </button>
      </div>
    </div>
  </div>
);

export default InputArea;
