"use client";

import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Calendar } from "@/components/ui/calendar";
import { CurrentTime } from "./time";
import { TaskProgress } from "./progress";
import { UpcomingMeeting } from "./meeting";
import { BreakButton } from "./break";
import { CheckOutButton } from "./out";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@nextui-org/react";
import { Search, BellDot, HelpCircle } from "lucide-react";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  ssr: false;
  return (
    <div className="flex h-screen w-screen bg-gray-100 space-x-5">
      {/* Left Sidebar */}
      <div className="w-80 h-fit mx-8 my-10">
        <LeftSidebar />
      </div>

      {/* Right Content */}
      <div className="flex-grow mt-6 p-4">
        <Input
          classNames={{
            base: "h-12",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper:
              "rounded-2xl w-11/12 h-full font-normal text-default-500 bg-white shadow-2xl gap-2",
          }}
          placeholder="Search anything"
          size="sm"
          startContent={<Search size={20} className="mx-3" />}
          endContent={
            <div className="flex gap-5 mr-3">
              <BellDot size={20} className="cursor-pointer"  />
              <HelpCircle size={20} className="cursor-pointer" />
            </div>
          }
          type="search"
        />

        <div className="flex space-x-20 mt-8 ">
          <div className="space-y-9 w-fit">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-3xl border bg-white p-6 shadow-2xl mb-4"
            />
            <CurrentTime />
          </div>
          <div className="space-y-4 w-7/8">
            <TaskProgress />
            <UpcomingMeeting />
            <div className="flex">
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="w-60 h-28">
                    <BreakButton />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-extrabold">
                      Work Paused
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogCancel className="hover:bg-blue-600 hover:border-2 hover:text-white hover:white border-2 border-blue-500">
                    Continue
                  </AlertDialogCancel>
                </AlertDialogContent>
              </AlertDialog>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <div className="w-60 h-28 ml-20">
                    <CheckOutButton />
                  </div>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-2xl font-normal">
                      Are You Sure for&nbsp;
                      <span className="text-red-500 font-extrabold">
                        {" "}
                        Checking Out?
                      </span>
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <AlertDialogCancel className="hover:bg-blue-600 hover:border-2 hover:text-white hover:white border-2 border-blue-500">
                    Yes
                  </AlertDialogCancel>
                  <AlertDialogAction className="hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
                    No
                  </AlertDialogAction>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
