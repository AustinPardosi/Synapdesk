import * as React from "react";
import { PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BreakButton() {
  return (
    <Button variant="outline" className="w-full h-full flex flex-col justify-center items-center shadow-2xl rounded-3xl">
      <PauseCircle size={40} className="text-orange-500"/>
      <h1 className="text-lg">Break</h1>
    </Button>
  );
}
