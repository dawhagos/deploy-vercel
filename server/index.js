import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json("Hello World. Today is: " + Date.now());
});

if (process.env.API_PORT) {
  app.listen(process.env.API_PORT);
}

module.exports = app;
