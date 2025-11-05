"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      {/* ✅ Navbar */}
      <nav className="w-full border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              className="dark:invert"
              src="/next.svg"
              alt="Next.js logo"
              width={90}
              height={20}
              priority
            />
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-zinc-800 dark:text-zinc-100" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-800 dark:text-zinc-100" />
            )}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-zinc-800 dark:text-zinc-100 hover:underline">
              หน้าแรก
            </a>
            <a href="#" className="text-zinc-800 dark:text-zinc-100 hover:underline">
              เนื้อหา
            </a>
            <a href="#" className="text-zinc-800 dark:text-zinc-100 hover:underline">
              ติดต่อ
            </a>
          </div>
        </div>
      </nav>

      {/* ✅ Mobile slide-in menu (from right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-zinc-900 shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
          <span className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
            หน้าแรก
          </span>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <X className="w-5 h-5 text-zinc-800 dark:text-zinc-100" />
          </button>
        </div>

        <div className="flex flex-col p-4 space-y-4">
          <a
            href="#"
            className="text-zinc-800 dark:text-zinc-100 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            เนื้อหา
          </a>
          <a
            href="#"
            className="text-zinc-800 dark:text-zinc-100 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#"
            className="text-zinc-800 dark:text-zinc-100 hover:underline"
            onClick={() => setIsOpen(false)}
          >
            ติดต่อ
          </a>
        </div>
      </div>

      {/* ✅ Overlay when menu open */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ✅ Main content */}
      <main className="flex flex-col items-center justify-center min-h-screen w-full max-w-3xl mx-auto py-32 px-6 mt-20 bg-white dark:bg-black sm:items-start">
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div> */}
      </main>
    </div>
  );
}
