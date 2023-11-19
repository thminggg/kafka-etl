import { produce } from "@thminggg/kafka";
import cors from "cors";
import "dotenv/config";
import express from "express";

const main = async () => {
  const PORT = 9000;
  const app = express();
  app.use(cors(), express.json());

  app.get("/", (req, res) => {
    return res.send("Hello world");
  });

  app.get("/produce", (req, res) => {
    produce();
    return res.send("Message sent to Kafka queue!");
  });

  app.listen({ port: PORT }, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();
