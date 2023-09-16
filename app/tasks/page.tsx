import React from "react";
import LeftSidebar from "@/components/shared/LeftSidebar";
import MainTask from "./mainTask";

const page = () => {
  return (
    <main className="hidden bg-gray-100 items-start justify-center gap-6 md:grid lg:grid-cols-2 xl:grid-cols-2 ">
      <div className="grid items-start">
        <LeftSidebar />
      </div>
      <div className="flex flex-col rounded-3xl bg-white p-4 items-center shadow-2xl">
        <MainTask/>
      </div>
    </main>
  );
};

export default page;
