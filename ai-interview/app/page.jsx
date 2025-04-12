import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center gap-4">
      <p className="text-4xl font-bold">Mock Mate</p>
      <p className="text-lg">An AI Mock Interview App</p>
      <Button>Click Me</Button>
    </div>
  );
}
