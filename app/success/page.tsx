import React from "react";

const page = () => {
  return (
    <main className="font-poppins flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl">
        Hello, <strong>Rara</strong>👋
      </h1>
      <h1 className="text-2xl">
        Your Log In Is{" "}
        <span className="text-green-500 font-bold">Successful</span>
      </h1>
    </main>
  );
};

export default page;
