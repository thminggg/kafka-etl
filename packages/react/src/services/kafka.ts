import KafkaAPI from "../api/kafka";

export const produce = async () => {
  console.log(process.env.NEXT_PUBLIC_HOST);
  console.log(process.env.NEXT_PUBLIC_EXPRESS_PORT);
  await KafkaAPI.get("/produce");
};
