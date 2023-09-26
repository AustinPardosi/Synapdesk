import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const page = () => {
  return (
    <main className="flex h-screen w-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="p-4 mt-6 space-y-9">
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
                <TableCell className="text-red-500 font-extrabold">
                  3h 29m
                </TableCell>
                <TableCell className="text-red-500 font-extrabold">
                  20%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">4</TableCell>
                <TableCell>Thursday</TableCell>
                <TableCell>08.00 - 15.00</TableCell>
                <TableCell>5h 30m</TableCell>
                <TableCell>100%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell>Friday</TableCell>
                <TableCell>06.00 - 13.50</TableCell>
                <TableCell>7h 50m</TableCell>
                <TableCell>85%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">8</TableCell>
                <TableCell>Monday</TableCell>
                <TableCell>07.00 - 10.29</TableCell>
                <TableCell className="text-red-500 font-extrabold">
                  3h 29m
                </TableCell>
                <TableCell className="text-red-500 font-extrabold">
                  20%
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium ">9</TableCell>
                <TableCell>Thursday</TableCell>
                <TableCell>08.00 - 15.00</TableCell>
                <TableCell>5h 30m</TableCell>
                <TableCell>100%</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">10</TableCell>
                <TableCell>Friday</TableCell>
                <TableCell>06.00 - 13.50</TableCell>
                <TableCell>7h 50m</TableCell>
                <TableCell>85%</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Card>
      </div>
    </main>
  );
};

export default page;
