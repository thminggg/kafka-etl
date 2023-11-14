import { Kafka } from "kafkajs";
import "dotenv/config";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [String(process.env.KAFKA_BROKER_1)],
});

export default kafka;
