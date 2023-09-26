"use client";

import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Spinner } from "@nextui-org/react";
import Router from "next/navigation";
import { useRouter } from "next/router";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const router = useRouter;

  useEffect(() => {
    const screenWidth = window.innerWidth;
    setIsMobile(screenWidth <= 768);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center h-screen w-screen space-y-5">
      <h1 className="font-poppins text-5xl text-center">
        <strong>Hello</strong>, Good Day!
      </h1>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button className="rounded-full px-20 h-10 font-medium text-xl hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
            Ready for Work
            <MoveRight className="ml-2" />
          </Button>
        </AlertDialogTrigger>
        {isMobile ? (
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="font-black text-2xl text-red-500">
                Please Use Laptop / PC!
              </AlertDialogTitle>
            </AlertDialogHeader>
            <AlertDialogDescription>
              You are using a mobile device right now. Please change and use a
              laptop or PC instead!
            </AlertDialogDescription>
            <AlertDialogFooter className="items-center">
              <Link href="/">
                <AlertDialogAction className="rounded-xl px-5 hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
                  OK
                </AlertDialogAction>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        ) : (
          <>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-black text-2xl">
                  Prepare for face-recognition
                </AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogDescription>
                Click 'OK' to use Face-Recognition
              </AlertDialogDescription>
              <AlertDialogFooter className="items-center">
                <Link href="/face-recognition">
                  <AlertDialogAction className="rounded-xl px-5 hover:bg-white hover:border-2 hover:text-blue-500 hover:border-blue-500">
                    OK
                  </AlertDialogAction>
                </Link>
              </AlertDialogFooter>
            </AlertDialogContent>
          </>
        )}
      </AlertDialog>
    </main>
  );
}
