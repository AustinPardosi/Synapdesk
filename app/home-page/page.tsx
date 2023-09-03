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
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const page = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <main className="hidden bg-gray-100 items-start justify-center gap-6 md:grid lg:grid-cols-2 xl:grid-cols-3 ">
      <div className="grid items-start">
        <LeftSidebar />
      </div>
      <div className="grid items-start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-3xl border bg-white w-fit h-fit p-4 shadow-2xl"
        />
      </div>
      <div className="grid items-start">
        <CurrentTime />
      </div>
      <div className="grid items-start">
        <TaskProgress />
      </div>
      <div className="grid items-start">
        <UpcomingMeeting />
      </div>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="grid items-start">
            <BreakButton />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-center text-2xl font-extrabold">
              Work Paused
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-blue-600 hover:border-2 hover:text-white hover:white border-2 border-blue-500">
              Continue
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <div className="grid items-start">
            <CheckOutButton />
          </div>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="flex items-center justify-center text-2xl font-normal">
              Are You Sure for&nbsp;
              <span className="text-red-500 font-extrabold">
                {" "}
                Checking Out?
              </span>
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="hover:bg-blue-600 hover:border-2 hover:text-white hover:white border-2 border-blue-500">
              Yes
            </AlertDialogCancel>
            <AlertDialogAction className="hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
              No
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </main>
  );
};

export default page;
