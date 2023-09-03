"use client";

import * as React from "react";
import dynamic from "next/dynamic";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function getCurrentTime() {
  return new Date();
}

export function CurrentTime() {
  const [currentTime, setCurrentTime] = React.useState(getCurrentTime());

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Use another effect to update the time every second
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // This effect runs once, similar to componentDidMount

  const formattedTime = currentTime.toLocaleTimeString(undefined, {
    hour12: false,
  });

  return (
    <Card className="w-1/2 p-4 shadow-2xl rounded-3xl flex justify-center items-center">
      <CardContent>
        <Label className="text-4xl font-bold">{formattedTime}</Label>
      </CardContent>
    </Card>
  );
}
