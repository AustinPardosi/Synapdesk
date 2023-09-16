"use client";

import * as React from "react";
import Clock from "react-live-clock";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import dynamic from "next/dynamic";

export function CurrentTime() {
  return (
    <Card className="w-full h-1/4 p-4 shadow-2xl rounded-3xl flex justify-center items-center">
      <Label className="text-4xl font-black">
        <Clock
          format={"HH : mm : ss"}
          ticking={true}
        />
      </Label>
    </Card>
  );
}
