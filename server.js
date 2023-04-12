const express = require("express");
const app = express();
const { Configuration, OpenAIApi } = require("openai");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());

// const api_key = process.env.OPENAI_API_KEY;
// const client = new openai(api_key);

const PORT = process.env.PORT || 5000;

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

app.post("/api/question", async (req, res) => {
  const { message } = req.body;

  const messages = [{ role: "user", content: message }];

  // const prompt = `
  //   The following is a conversation with an AI assistant. The assistant helps you accomplish tasks and answer questions.

  //   You: ${question}
  //   AI:
  // `;

  try {
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
      max_tokens: 2000,
      stop: ["{}"],
      temperature: 0.5,
      frequency_penalty: 0,
      presence_penalty: 0,
      top_p: 0,
    });

    const answer = response.data.choices[0].message.content.trim();
    res.status(200).json({ answer });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));
