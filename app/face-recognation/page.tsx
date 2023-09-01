import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main className="font-poppins text-3xl flex flex-col items-center justify-center m-24">
      <h1>
        Give Your Best <span className="text-orange-500 font-bold">Smile</span>
        😊
      </h1>
      <Link href="/success">
        <Button className="rounded-full px-12 text-lg">Capture</Button>
      </Link>
    </main>
  );
};

export default page;
