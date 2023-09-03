import * as React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function UpcomingMeeting() {
  return (
    <Card className="w-full bg-white h-fit p-4 shadow-2xl rounded-3xl justify-center items-center">
      <CardHeader className="text-3xl font-medium inline-block">
        Upcoming <strong>Meetings</strong>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
      <div className="flex items-center space-x-9 text-base">
        <h1>12.00 - 12.30</h1>
        <h1>Weekly Report</h1>
      </div>
      <div className="flex items-center space-x-9 text-base">
        <h1>16.30 - 17.00</h1>
        <h1>User Interview</h1>
      </div>
      <div className="flex items-center space-x-9 text-base">
        <h1>17.00 - 18.00</h1>
        <h1>Review</h1>
      </div>
      </CardContent>
    </Card>
  );
}
