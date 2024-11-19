import ChatMessage from './ChatMessage.jsx';

const ChatContainer = ({ messages }) => {
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.map((message) => (
        <ChatMessage
          key={message.id}
          isUser={message.isUser}
          content={message.content}
          codeSnippet={message.codeSnippet}
        />
      ))}
    </div>
  );
};

export default ChatContainer;
