'use client'

import Link from "next/link";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [secondsRemaining, setSecondsRemaining] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/home-page"; // Redirect to the homepage after 5 seconds
    }, 5000);

    const interval = setInterval(() => {
      setSecondsRemaining((prevSeconds) => {
        // Ensure the countdown doesn't go below zero
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          return 0;
        }
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="font-poppins flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-3xl">
        Hello, <strong>Rara</strong>👋
      </h1>
      <h1 className="text-2xl">
        Your Log In Is{" "}
        <span className="text-green-500 font-bold">Successful</span>
      </h1>
      <h1 className="text-sm font-light mt-2">
        Redirecting to homepage in{" "}
        {secondsRemaining} {secondsRemaining !== 1 ? "seconds" : "second"}.
      </h1>
    </main>
  );
};

export default Page;
