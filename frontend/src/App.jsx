import { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    const newMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8080/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userPrompt: input }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      const aiMsg = { sender: "ai", text: data.output || "No response received." };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (error) {
      setMessages((prev) => [...prev, { sender: "ai", text: "Error fetching response ❌" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <div className="chat-container">
        <h1 className="title">PromptLens</h1>
        <div className="chat-box">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`message ${msg.sender === "user" ? "user-msg" : "ai-msg"}`}
            >
              {msg.text}
            </div>
          ))}
          {loading && <div className="loader"></div>}
        </div>
        <div className="input-area">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your prompt..."
          />
          <button onClick={handleSend}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
