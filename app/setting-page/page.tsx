"use client";

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
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader } from "@nextui-org/react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Page = () => {
  return (
    <main className="flex h-screen w-screen bg-gray-100 ">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="p-4 space-y-9">
        <Card className="w-full p-10 rounded-3xl shadow-2xl">
          <h1 className="font-extrabold text-center py-10 text-3xl underline underline-offset-8">
            General Settings
          </h1>
          <form>
            <div className="flex space-x-20">
              <h1>Profile picture</h1>
              <Input id="picture" type="file" />
            </div>
            <div className="flex gap-20 mt-10">
              <h1 className="font-bold">Name</h1>
              <h1>Karina Rahadiani</h1>
            </div>
            <div className="flex gap-20">
              <h1>Role</h1>
              <h1>Marketing</h1>
            </div>
            <div className="flex gap-20">
              <h1>Department</h1>
              <h1>MARKETING & SALES</h1>
            </div>
            <div className="flex gap-20">
              <h1>Email</h1>
              <Input type="email" placeholder="Email" />
            </div>
            <div className="flex gap-20">
              <h1>Phone</h1>
              <Input type="phone" placeholder="Phone number" />
            </div>
            <div className="flex gap-20">
              <h1>Email notification</h1>
              <Switch id="airplane-mode" className="green" />
            </div>
          </form>
        </Card>
      </div>
    </main>
  );
};

export default Page;
