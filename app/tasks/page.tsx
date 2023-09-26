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

const Page = () => {
  return (
    <main className="flex h-screen w-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="p-4 mt-6 space-y-9 text-center w-full h-full justify-center items-center">
        <h1 className="text-4xl font-bold text-red-500">UNDER CONSTRUCTION</h1>
        <p className="text-gray-600">We're working on something awesome!</p>
      </div>
    </main>
  );
};

export default Page;
