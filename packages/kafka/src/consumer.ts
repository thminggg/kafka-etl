import kafka from "./kafka";
import { wait } from "./utils/utils";

export const consume = async () => {
  const consumer = kafka.consumer({ groupId: "test-group" });
  await consumer.connect();
  await consumer.subscribe({ topic: "test-topic", fromBeginning: true });
  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log(
        "------------------------ Start of message ------------------------"
      );
      console.log("\u001b[1;32m Consumer:\u001b[0m Received producer message", {
        value: message?.value?.toString(),
      });
      console.log(
        "\u001b[1;32m Consumer:\u001b[0m Transform data into base64..."
      );
      console.log(
        `\u001b[1;32m Consumer:\u001b[0m Transformed data: ${btoa(
          message?.value?.toString()
        )}`
      );
      console.log(
        "\u001b[1;32m Consumer:\u001b[0m Saving transformed data to DB..."
      );
      await wait(1000);
      console.log("\u001b[1;32m Consumer:\u001b[0m Completed!");
      console.log(
        "------------------------ End of message ------------------------"
      );
    },
  });
};

consume();
