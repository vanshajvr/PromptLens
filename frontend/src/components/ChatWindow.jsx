import MessageBubble from "./MessageBubble";

export default function ChatWindow({ messages }) {
  return (
    <div className="chat-window">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
      ))}
    </div>
  );
}
