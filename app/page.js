'use client'
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <main className="relative flex min-h-screen bg-super-light flex-col text-black">
      <div className="h-screen flex flex-col lg:flex-row-reverse gap-5 p-5 lg:p-20 justify-center">
        <div className="w-full lg:w-1/2 grid place-content-center rounded p-5">
          <div className="relative w-36 lg:w-60 z-10">
            <div className="absolute -top-5 -left-10 border border-main-color w-28 h-28 -z-10 rounded-lg"></div>
            <div className="absolute bottom-10 -left-10 bg-second-color w-3 h-3 -z-10 rounded-full"></div>
            <div className="absolute top-16 -right-24 bg-second-color w-20 h-20 -z-10 rounded-full"></div>
            <div className="absolute top-10 -right-10 bg-second-color w-2 h-2 -z-10 rounded-full"></div>
            <div className="absolute top-44 -right-20 bg-light-color w-10 h-10"></div>
            <div className="absolute top-48 -right-16 border border-main-color w-10 h-10"></div>
            <div className="p-2 w-full bg-second-color border border-main-color">
              <Image
                src="/phone.jpg"
                alt="phone"
                width={100}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col gap-5 justify-center">
          <h1 className="text-2xl lg:text-6xl font-bold">Create Your Own Page</h1>
          <p className="max-w-80">Easy to use. Just drag and drop. Design all you want.</p>
          <button className="text-white bg-main-color w-40 py-2 rounded-md mx-auto lg:ml-0">Get Started</button>
        </div>
      </div>
      <RegisterModal />
      {/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div> */}

    </main>
  );
}
