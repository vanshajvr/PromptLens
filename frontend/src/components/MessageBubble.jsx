export default function MessageBubble({ sender, text }) {
  return (
    <div className={`message ${sender}`}>
      <p>{text}</p>
    </div>
  );
}
