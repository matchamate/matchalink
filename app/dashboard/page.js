'use client'
import RegisterModal from "@/components/RegisterModal";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [showRegModal, setShowRegModal] = useState(true)
  return (
    <main className="w-full h-screen bg-super-light">
      {showRegModal ? (
        <RegisterModal />
      ) : (
        <p>Hello</p>
      )}
    </main>
  );
}
