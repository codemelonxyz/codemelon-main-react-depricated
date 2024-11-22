import ChatMessage from './ChatMessage.jsx';

const ChatContainer = ({ messages }) => {
  console.log(messages)
  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.map((message) => (
        <ChatMessage
          key={Date.now() + Math.random()}
          isUser={message.isUser}
          content={`"${JSON.stringify(message.content, null, 4)}"`}
          codeSnippet={message.codeSnippet}
        />
      ))}
    </div>
  );
};

export default ChatContainer;
