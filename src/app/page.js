import Image from "next/image";
import logobig from "../../public/logobig.webp";

export default function Home() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center">
        <Image src={logobig} alt="" height={200} />
        <div className="text-6xl font-fugaz bg-sliced-blue p-4 rounded-2xl  text-white">
          Sliced Bread
        </div>
      </div>

      <div className="flex flex-col items-center text-2xl">
        <div className="m-4 bg-sliced-blue p-2 rounded-2xl text-white">
          Is it the best thing since sliced bread, or just marketing B-S?
        </div>
      </div>
    </div>
  );
}
