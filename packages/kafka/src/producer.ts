import { PartitionerArgs } from "kafkajs";
import kafka from "./kafka";

const CustomPartitioner = () => {
  return ({ topic, partitionMetadata, message }: PartitionerArgs) => {
    console.log(topic);
    console.log(partitionMetadata);
    console.log(message);

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
    messages: [{ value: "Hello KafkaJS user!" }],
  });
  await producer.disconnect();
};
