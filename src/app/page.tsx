"use client";

export default function Page() {
  async function handleProduce() {
    // TODO: call expressjs to produce in Kafka
    console.log("produce in kafka");
  }

  return (
    <>
      <h1>Hello, Next.js!</h1>
      <button onClick={handleProduce}>produce</button>
    </>
  );
}
