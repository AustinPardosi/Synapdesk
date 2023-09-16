import * as React from "react";
import { LogOut } from 'lucide-react';
import { Button } from "@/components/ui/button";

export function CheckOutButton() {
  return (
    <Button variant="outline" className="w-full h-full flex flex-col justify-center items-center shadow-2xl rounded-3xl">
      <LogOut size={40} className="text-red-500"/>
      <h1 className="text-lg">Check <b>Out</b></h1>
    </Button>
  );
}
