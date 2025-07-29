import React from "react";
import Hero from "@/component/Hero";

export default function Home() {
  return (
    <main className="relative mx-auto sm:px-10 overflow-hidden flex flex-col items-center justify-center bg-[#000319] text-center text-white min-h-screen">
      <Hero />
      <div className="max-w-7xl w-full inset-0 bg-black opacity-50">
        <h1 className="text-4xl sm:text-6xl font-bold mt-10">
          Welcome to My Tailwind CSS Project
        </h1>
        <p className="mt-4 text-lg sm:text-xl">
          This is a simple example of a Tailwind CSS setup with custom colors.
        </p>
      </div>
    </main>
  );
}
