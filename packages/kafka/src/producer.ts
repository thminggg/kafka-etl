import { PartitionerArgs } from "kafkajs";
import kafka from "./kafka";

const CustomPartitioner = () => {
  return ({ topic, partitionMetadata, message }: PartitionerArgs) => {
    // return the partition number
    return 0;
  };
};

export const produce = async () => {
  const producer = kafka.producer({
    createPartitioner: CustomPartitioner,
  });
  await producer.connect();
  await producer.send({
    topic: "test-topic",
    messages: [{ value: "Producer: Produced message to Kafka" }],
  });
  await producer.disconnect();
};
