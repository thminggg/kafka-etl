import { Kafka } from "kafkajs";
import "dotenv/config";

const kafka = new Kafka({
  clientId: "my-app",
  brokers: [String(`${process.env.HOST}:${process.env.KAFKA_BROKER_PORT_1}`)],
});

export default kafka;
