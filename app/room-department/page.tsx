import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { School } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
// import MainRooms from "./mainRooms";

const page = () => {
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
            <Link href="/rooms">
              <Button
                variant="outline"
                className="rounded-full bg-white border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-2 hover:text-white hover:border-white h-[30px]"
              >
                <MoveLeft className="mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-xl font-medium">
              Visit Any <strong>Department</strong> to Meet People
            </h1>
          </div>
          <div className="space-y-5 p-5 mt-5">
            <div className="space-x-5 flex">
              {/* href={`/select-seats?department=${encodeURIComponent(selectedDepartment)}`} */}
              <Link
                href={`/room-seats?department=${encodeURIComponent("Marketing & Sales")}`}
              >
                <Button className="border-1 w-[300px] h-[150px] border-gray-300 bg-white text-lg text-black hover:border-blue-500 hover:border-2 hover:bg-white">
                  Marketing & Sales
                </Button>
              </Link>
              <Link href={`/room-seats?department=${encodeURIComponent("Technology")}`}>
                <Button className="border-1 w-[300px] h-[150px] border-gray-300 bg-white text-lg text-black hover:border-blue-500 hover:border-2 hover:bg-white">
                  Technology
                </Button>
              </Link>
            </div>
            <div className="space-x-5 flex">
              <Link href={`/room-seats?department=${encodeURIComponent("CEO Office")}`}>
                <Button className="border-1 w-[300px] h-[150px] border-gray-300 bg-white text-lg text-black hover:border-blue-500 hover:border-2 hover:bg-white">
                  CEO Office
                </Button>
              </Link>
              <Link href={`/room-seats?department=${encodeURIComponent("Product")}`}>
                <Button className="border-1 w-[300px] h-[150px] border-gray-300 bg-white text-lg text-black hover:border-blue-500 hover:border-2 hover:bg-white">
                  Product
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
};

export default page;
