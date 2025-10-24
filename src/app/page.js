import Image from "next/image";
import logobig from "../../public/logobig.webp";

export default function Home() {
  return (
    <div className="h-screen bg-red-300">
      <div className="flex justify-center items-center">
        <Image src={logobig} alt="" height={200} />
        <div className="text-6xl">Sliced Bread</div>
      </div>

      <div className="flex flex-col items-center text-2xl">
        <div className="m-4">
          Is it the best thing since sliced bread, or just marketing B-S?
        </div>
        <div className="m-4">Come join the chat</div>
      </div>
    </div>
  );
}
