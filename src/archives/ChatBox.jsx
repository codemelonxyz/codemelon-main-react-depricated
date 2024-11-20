
import React, { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext";
import { Send } from "lucide-react";

const ChatBox = () => {
  const { theme } = useContext(ThemeContext);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

  return (
    <div
      className={`flex flex-col h-full ${
        theme === "dark" ? "bg-neutral-950 text-white" : "bg-white text-black"
      }`}
    >
      {/* Chatbox header */}
      <div
        className={`p-4 border-b ${
          theme === "dark"
            ? "bg-neutral-900 border-neutral-800"
            : "bg-gray-100 border-gray-300"
        }`}
      >
        <h2 className="text-xl font-bold">Chat</h2>
      </div>
      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500">
            No messages yet. Start the conversation!
          </div>
        ) : (
          messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-4 ${
                msg.sender === "user" ? "text-right" : "text-left"
              }`}
            >
              <div
                className={`inline-block px-4 py-2 rounded-lg ${
                  theme === "dark"
                    ? msg.sender === "user"
                      ? "bg-blue-600 text-white"
                      : "bg-neutral-800 text-white"
                    : msg.sender === "user"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))
        )}
      </div>
      {/* Chat input */}
      <div
        className={`p-4 border-t ${
          theme === "dark"
            ? "bg-neutral-900 border-neutral-800"
            : "bg-gray-100 border-gray-300"
        }`}
      >
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className={`flex-1 p-2 rounded-l-lg border ${
              theme === "dark"
                ? "bg-neutral-800 border-neutral-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          />
          <button
            onClick={handleSend}
            className={`p-2 rounded-r-lg border ${
              theme === "dark"
                ? "bg-neutral-800 border-neutral-700 text-white"
                : "bg-white border-gray-300 text-black"
            }`}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
