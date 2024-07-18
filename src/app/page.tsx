import TestCard from "@/components/TestCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden w-full h-fit min-h-screen">
      <div className="w-full h-screen flex items-center justify-center">
        <TestCard />
      </div>
    </main>
  );
}
