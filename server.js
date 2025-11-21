import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Vansh, your backend is alive ⚡");
});

// ✅ Prompt endpoint (now using Hugging Face)
app.post("/api/prompt", async (req, res) => {
  try {
    const { userPrompt } = req.body;

    const response = await fetch(
      "https://api-inference.huggingface.co/models/microsoft/Phi-3-mini-4k-instruct",
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: userPrompt }),
      }
    );

    const data = await response.json();

    let output = "No response received.";
    if (Array.isArray(data) && data[0]?.generated_text) {
      output = data[0].generated_text;
    } else if (data.error) {
      output = `Error: ${data.error}`;
    }

    res.json({ output });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Failed to generate response" });
  }
});

app.get("/api/hello", (req, res) => {
  res.send("Backend connected successfully ✅");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
