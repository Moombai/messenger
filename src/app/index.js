import express from "express";
import { getMessages, saveMessage, validateMessage } from "./client/messenger.js";
const app = express();
const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.use(express.json());

app.get("/", async (req, res) => {
  const theMessage = await getMessages();
  res.send(`List of messages: ${theMessage}.`);
});

app.post("/save", async (req, res) => {
  const message = req.body && req.body.message;

  if (!message) {
    return res.status(400).json({ 
      error: "Message is required"
    });
  }

  try {
    validateMessage(message);
  } catch (e) {
    return res.status(400).send({
      error: e.message
    });
  }

  const response = await saveMessage(message);

  res.status(201).json({
    message:`Saved ok`,
    id: response.id
  });
});

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`);
});