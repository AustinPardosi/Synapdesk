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
          <h1>Under Construction</h1>
        </Card>
      </div>
    </main>
  );
};

export default page;
