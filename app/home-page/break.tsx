import * as React from "react";
import { PauseCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BreakButton() {
  return (
    <Button variant="outline" className="w-full h-full justify-center items-center shadow-2xl rounded-3xl">
      <PauseCircle className="text-orange-500"/>
      <h1>Break</h1>
    </Button>
  );
}
