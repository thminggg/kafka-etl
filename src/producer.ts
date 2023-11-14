import kafka from "./services/kafka";
import { Partitioners, PartitionerArgs } from "kafkajs";

const CustomPartitioner = () => {
  return ({ topic, partitionMetadata, message }: PartitionerArgs) => {
    console.log(topic);
    console.log(partitionMetadata);
    console.log(message);

    // return the partition number
    return 0;
  };
};

const produce = async () => {
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

produce();
