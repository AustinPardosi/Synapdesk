'use client'

import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Button } from "@/components/ui/button";
import {
  Card,
} from "@/components/ui/card";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams()
  const department = searchParams.get('department')
  return (
    <main className="flex h-screen w-screen bg-gray-100 items-center justify-center">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="p-4 space-y-9">
        <Card className="w-full p-10 rounded-3xl shadow-2xl ">
          <div className="flex gap-5">
            <Link href="/room-department">
              <Button
                variant="outline"
                className="rounded-full bg-white border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-2 hover:text-white hover:border-white h-[30px]"
              >
                <MoveLeft className="mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="flex items-center justify-center flex-grow text-xl font-medium">
              {department}
            </h1>
          </div>
          <div className="space-y-5 p-5 mt-5">
            <Button className="w-[100] h-[100] rounded-[50%] bg-green-600 hover:bg-green-700  text-white"></Button>
            <Card className="flex justify-center items-center flex-grow w-[400px] h-[150px] border-2 border-green-500" />
          </div>
        </Card>
      </div>
    </main>
  );
};

export default page;
