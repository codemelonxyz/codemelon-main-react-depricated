const ChatMessage = ({ isUser, content, codeSnippet }) => {
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className="flex items-start max-w-3xl">
        {!isUser && (
          <div className="w-8 h-8 rounded-full bg-[] flex items-center justify-center mr-2 flex-shrink-0">
            <img src="/nobackgroundlogo.png" alt="Watermelon" className="w-6 h-6" />
          </div>
        )}
        <div className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}>
          <span className="text-sm text-gray-400 mb-1">{isUser ? 'You' : 'Watermelon'}</span>
          <div className="bg-gray-800 rounded-lg p-3">
            <p className="text-white text-sm">{content}</p>
            {codeSnippet && (
              <div className="mt-2 bg-[#1a1a1a] rounded-md p-3">
                <pre className="text-[#7680af] text-sm font-mono whitespace-pre-wrap">{codeSnippet}</pre>
              </div>
            )}
          </div>
        </div>
        {isUser && (
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center ml-2 flex-shrink-0">
            <span className="text-white text-sm">Y</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
