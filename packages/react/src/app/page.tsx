"use client";
import { produce } from "../services/kafka";
import Image from "next/image";
import producerImg from "../public/factory.png";
import cargoImg from "../public/cargo.jpg";

export default function Page() {
  async function handleProduce() {
    await produce();
    console.log("produce in kafka");
  }

  return (
    <>
      <div className="container">
        <div className="item">
          <Image
            src={producerImg}
            alt="Producer"
            className="producer"
            onClick={handleProduce}
          />
          <p>Producer</p>
        </div>
        <div className="item cargoContainer">
          <Image
            src={cargoImg}
            alt="Cargo"
            className="cargoImg"
            onClick={handleProduce}
          />
        </div>
      </div>
    </>
  );
}
