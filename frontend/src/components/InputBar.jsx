import { useState } from "react";

export default function InputBar({ onSend }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSend(input);
    setInput("");
  };

  return (
    <form className="input-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your prompt here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}
