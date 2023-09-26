import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { CardHeader } from "@nextui-org/react";

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
          <CardHeader>
            <h1 className="font-bold text-3xl underline underline-offset-8">
              General Settings
            </h1>
          </CardHeader>
          <CardContent>
              <h1>Profile picture</h1>
              <Input id="picture" type="file" />
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
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default page;
