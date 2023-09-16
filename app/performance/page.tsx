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
        <Card className="w-full p-10 rounded-3xl shadow-2xl">
          <div className="flex justify-between">
            <h1 className="font-extrabold text-3xl">September Performance</h1>
          </div>
          <Table className="mt-4">
            <TableHeader>
              <TableRow className="bg-gray-100">
                <TableHead className="w-[10px] text-black text-base font-extrabold">
                  Date
                </TableHead>
                <TableHead className="text-black w-[100px] text-base font-extrabold">
                  Day
                </TableHead>
                <TableHead className="text-black w-[150px] text-base font-extrabold">
                  Time
                </TableHead>
                <TableHead className="text-black text-base font-extrabold">
                  Durations
                </TableHead>
                <TableHead className="text-black text-base font-extrabold">
                  Task Performance
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium ">1</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>07.00 - 16.00</TableCell>
                <TableCell>7h 30m</TableCell>
                <TableCell>100%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell>Tuesday</TableCell>
                <TableCell>07.00 - 13.00</TableCell>
                <TableCell>6h 0m</TableCell>
                <TableCell>80%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell>Wednesday</TableCell>
                <TableCell>07.00 - 10.29</TableCell>
                <TableCell className="text-red-500 font-extrabold">3h 29m</TableCell>
                <TableCell className="text-red-500 font-extrabold">20%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
};

export default page;
