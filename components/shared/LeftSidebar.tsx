"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { LayoutGrid } from "lucide-react";
import { ListTodo } from "lucide-react";
import { Users } from "lucide-react";
import { BarChart } from "lucide-react";
import { Settings } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import supabase from "@/utils/supabase";
import { user } from "@nextui-org/react";

interface User {
  id: number;
  name: string;
  image: string;
  role: string;
}

interface LeftSidebarProps {
  user: User | null;
}

const LeftSidebar = () => {
  const pathname = usePathname();
  const [users, setUser] = React.useState<User | null>(null);
  React.useEffect(() => {
    async function fetchUser() {
      const { data, error } = await supabase
        .from("users")
        .select("id, name, image, role")
        .eq("id", 6);

      if (!error) {
        setUser(data[0]);
      }
    }
    fetchUser();
  }, []);
  // console.log(users);

  return (
    <main>
      <aside
        id="sidebar"
        className="flex flex-col rounded-3xl bg-white p-4 items-center shadow-2xl"
      >
        <Avatar className="h-20 w-20">
          <AvatarImage
            src={users?.image}
            draggable="false"
            alt=""
          />
        </Avatar>
        <h1 className="font-bold text-xl" id="name">
          {users?.name}
        </h1>
        <h1 className="font-light text-slate-400 text-base mb-12" id="role">
          {users?.role}
        </h1>
        <ul className="w-4/6">
          <li>
            <Link
              href="/home-page"
              draggable="false"
              className={`flex items-center p-2 rounded-xl ${
                pathname === "/home-page"
                  ? "text-white bg-blue-500"
                  : "text-slate-500"
              }`}
            >
              <LayoutGrid className="ml-1 mr-4" />
              Dashboard
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/tasks"
              draggable="false"
              className={`flex items-center p-2 rounded-xl ${
                pathname === "/tasks"
                  ? "text-white bg-blue-500"
                  : "text-slate-500"
              }`}
            >
              <ListTodo className="ml-1 mr-4" />
              Tasks
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/rooms"
              draggable="false"
              className={`flex items-center p-2 rounded-xl ${
                pathname === "/rooms" || pathname === "/room-department"
                  ? "text-white bg-blue-500"
                  : "text-slate-500"
              }`}
            >
              <Users className="ml-1 mr-4" /> Rooms
            </Link>
          </li>
          <li className="mt-2">
            <Link
              href="/performance"
              draggable="false"
              className={`flex items-center p-2 rounded-xl ${
                pathname === "/performance"
                  ? "text-white bg-blue-500"
                  : "text-slate-500"
              }`}
            >
              <BarChart className="ml-1 mr-4" /> Performance
            </Link>
          </li>
          <li className="mt-20 mb-20">
            <Link
              href="/setting-page"
              draggable="false"
              className={`flex items-center p-2 rounded-xl ${
                pathname === "/setting-page"
                  ? "text-white bg-blue-500"
                  : "text-slate-500"
              }`}
            >
              <Settings className="ml-1 mr-4" /> Settings
            </Link>
          </li>
        </ul>
      </aside>
    </main>
  );
};

export default LeftSidebar;
