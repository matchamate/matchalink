'use client'

import Layout from "@/components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <div>
        <p className="mb-5 lg:mb-10">Your Pages</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-10">
          <Link href="/login" className="border border-main-color h-96 overflow-hidden relative">
            <iframe src="http://localhost:3000/login" title="login" className="w-full h-full"></iframe>
            <div className="w-full h-full absolute top-0 left-0"></div>
          </Link>
          <Link href="/register" className="border border-main-color h-96 overflow-hidden relative">
            <iframe src="http://localhost:3000/register" title="login" className="w-full h-full"></iframe>
            <div className="w-full h-full absolute top-0 left-0"></div>
          </Link>
          <Link href="/login" className="border border-main-color h-96 overflow-hidden relative">
            <iframe src="http://localhost:3000/login" title="login" className="w-full h-full"></iframe>
            <div className="w-full h-full absolute top-0 left-0"></div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
