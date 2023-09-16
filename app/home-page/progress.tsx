import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { NextUIProvider } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";

interface CheckedItems {
  [key: string]: boolean;
}

export function TaskProgress() {
  return (
    <NextUIProvider>
      <Card className="w-full bg-white h-fit shadow-2xl rounded-3xl justify-center items-center">
        <CardHeader className="text-3xl font-medium inline-block">
          <strong>Task</strong> Progress
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <Checkbox lineThrough>Financial Projection</Checkbox>
          <Checkbox lineThrough>User Interview</Checkbox>
          <Checkbox lineThrough>Daily Report</Checkbox>
          <Checkbox lineThrough>Website Deployment</Checkbox>
        </CardContent>
      </Card>
    </NextUIProvider>
  );
}
