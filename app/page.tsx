import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="font-poppins text-5xl my-5">
        <strong>Hello</strong>, Good Day!
      </h1>
      <Link href="/face-recognation">
        <Button className="rounded-full px-20 h-10 font-medium text-xl hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
          Ready for Work
          <MoveRight className="ml-2" />
        </Button>
      </Link>
    </main>
  );
}
