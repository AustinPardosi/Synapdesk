import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <main className="flex h-screen w-screen bg-gray-100 ">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="p-4 mt-6 space-y-9">
        <Card className="w-full p-5 rounded-3xl shadow-2xl ">
          <Link href="/room-department">
            <Button
              variant="outline"
              className="w-full h-full border-dashed border-2 border-gray-400 flex flex-col justify-center items-center rounded-3xl p-3"
            >
              <Image src="/office.png" width={80} height={80} alt="" />
              <h1 className="flex text-lg">
                Visit Virtual Office <MoveRight className="ml-2" />
              </h1>
            </Button>
          </Link>
        </Card>
        <Card className="w-full p-10 rounded-3xl shadow-2xl">
          <div className="flex justify-between">
            <h1 className="font-bold text-3xl">Today Meeting Schedule</h1>
            <Button className="rounded-full w-1/4 h-1/6 bg-blue-500 hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
              Create New&nbsp; <strong>Meeting</strong>
            </Button>
          </div>
          <Table className="mt-4">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-[10px] text-black text-base font-extrabold">
                  No
                </TableHead>
                <TableHead className="text-black w-[200px] text-base font-extrabold">
                  Title
                </TableHead>
                <TableHead className="text-black w-[150px] text-base font-extrabold">
                  Time
                </TableHead>
                <TableHead className="text-black text-base font-extrabold">
                  Durations
                </TableHead>
                <TableHead className="text-black text-base font-extrabold">
                  Participants
                </TableHead>
                <TableHead className="text-black w-[200px] text-base font-extrabold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell>Weekly Project Driven</TableCell>
                <TableCell>00.00 - 00.00</TableCell>
                <TableCell>30 minutes</TableCell>
                <TableCell>Rara, Austin + 10 more</TableCell>
                <TableCell>
                  <Button className="rounded-full bg-white border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-2 hover:text-white hover:border-white">
                    <Image src="/zoom-icon.png" width={25} height={25} alt="" />
                    Join Meeting
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Weekly Project Driven</TableCell>
                <TableCell>00.00 - 00.00</TableCell>
                <TableCell>30 minutes</TableCell>
                <TableCell>Rara, Austin + 10 more</TableCell>
                <TableCell>
                  <Button className="rounded-full bg-white border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-2 hover:text-white hover:border-white">
                    <Image
                      src="/teams-icon.png"
                      width={25}
                      height={25}
                      alt=""
                    />
                    Join Meeting
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>Weekly Project Driven</TableCell>
                <TableCell>00.00 - 00.00</TableCell>
                <TableCell>30 minutes</TableCell>
                <TableCell>Rara, Austin + 10 more</TableCell>
                <TableCell>
                  <Button className="rounded-full bg-white border-2 text-blue-500 border-blue-500 hover:bg-blue-500 hover:border-2 hover:text-white hover:border-white">
                    <Image src="/zoom-icon.png" width={25} height={25} alt="" />
                    Join Meeting
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
};

export default page;
