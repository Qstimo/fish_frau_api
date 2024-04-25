import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { registerMessage, registerReview } from './controlers/MessageControllers.js';


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://rocked.vercel.app/*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get("/", (req, res) => { res.send('работает'); });

app.post('/send-message', registerMessage);
app.post('/send-review', registerReview);

const PORT = 4444;
app.listen(PORT, (err) => {
  if (err) { return console.log(err) }

  console.log("Server ok")
});