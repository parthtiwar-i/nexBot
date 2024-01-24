const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const env = require("dotenv");
const OpenAI = require("openai");

const app = express();

env.config();

app.use(cors());
app.use(bodyParser.json());

// Configure OPENAPI
const openai = new OpenAI({
  organization: "org-GR5Uw9IjpikTn7LrejnZIRlO",
  apiKey: "process.env.OPENAI_API_KEY",
});

// Listerning
app.listen("3000", () => console.log("Listening on port 3000"));

// Dummy route to test
app.get("/", (req, res) => {
  res.send("Hello from ChatGPT!");
});

// Post route for making requests
app.post("/", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: `${message}`,
      max_tokens: 100,
      temperature: 0.5,
    });
    res.json({ message: response.choices[0].text });
  } catch (error) {
    console.log(error.message);
    res.send(e).statusCode(400);
  }
});
