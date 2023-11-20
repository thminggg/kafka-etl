"use client";
import { produce } from "../services/kafka";

export default function Page() {
  async function handleProduce() {
    await produce();
    console.log("produce in kafka");
  }

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <button onClick={handleProduce}>produce</button>
    </>
  );
}
