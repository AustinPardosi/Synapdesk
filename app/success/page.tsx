"use client";

import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter dari Next.js
import useRedirectAfterSomeSeconds from "./redirect";

const Page = () => {
  const router = useRouter(); // Inisialisasi useRouter
  const { secondsRemaining } = useRedirectAfterSomeSeconds("/home-page", 5);

  // Buat fungsi untuk melakukan redirect
  const redirectToHomePage = () => {
    router.push("/home-page"); // Redirect ke halaman '/home-page'
  };

  // Tambahkan kondisi untuk melakukan redirect
  if (secondsRemaining === 0) {
    redirectToHomePage();
  }

  return (
    <main className="font-poppins flex flex-col items-center justify-center h-screen w-screen">
      <h1 className="text-3xl">
        Hello, <strong>Rara</strong>👋
      </h1>
      <h1 className="text-2xl">
        Your Log In Is{" "}
        <span className="text-green-500 font-bold">Successful</span>
      </h1>
      <h1 className="text-sm font-light mt-2"> Redirecting to homepage in{" "}
        {secondsRemaining} {secondsRemaining !== 1 ? "seconds" : "second"}.
      </h1>
    </main>
  );
};

export default Page;
