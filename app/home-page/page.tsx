"use client";

import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import { Calendar } from "@/components/ui/calendar";
import { CurrentTime } from "./time";
import { TaskProgress } from "./progress";
import { UpcomingMeeting } from "./meeting";
import { BreakButton } from "./break";
import { CheckOutButton } from "./out";

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
      <div className="grid items-start">
        <BreakButton />
      </div>
      <div className="grid items-start">
        <CheckOutButton />
      </div>
    </main>
  );
};

export default page;
