"use client";

import Link from "next/link";
import { Coins, Globe2, Menu, X } from "lucide-react";
import { useState } from "react";

type Language = "EN" | "UR" | "AR";
type Currency = "USD" | "PKR" | "AED";

export function TopBar() {
  return (
    <div className="top-bar hidden md:flex">
      <div className="social-icons-top flex">
        <a
          href="https://www.facebook.com/FastJobCareer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f" />
        </a>
        <a
          href="https://x.com/fastjobcareer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa-brands fa-x-twitter" />
        </a>
        <a
          href="https://www.linkedin.com/company/fastjobcareer/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in" />
        </a>
        <a
          href="https://www.tiktok.com/@fastjobcareer"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-tiktok" />
        </a>
      </div>
      
      <div className="auth-btns flex items-center gap-4">
        <Link href="/dashboard" className="px-3 py-1 rounded-md bg-amber-400 text-[#0a2351] font-semibold text-sm hover:bg-amber-300 transition-colors">
          Dashboard
        </Link>
        <Link href="/auth/register" className="px-3 py-1 rounded-md bg-green-500 text-white font-semibold text-sm hover:bg-green-600 transition-colors">
          Register
        </Link>
      </div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="flex w-full flex-nowrap items-center justify-between px-4">
        <Link href="/" className="brand-text-only">
          <span className="text-base sm:text-lg md:text-xl">
            Fast Job <span>Career</span>
          </span>
        </Link>
        <nav className="nav-pages hidden flex-nowrap items-center md:flex">
          <Link href="/">Home</Link>
          <Link href="/find-jobs">Find Jobs</Link>
          <Link href="/travel">Travel</Link>
          <Link href="/resource-hub">Resource Hub</Link>
          <Link href="/categories">All Categories</Link>
          <Link href="/sections">All Sections</Link>
          <Link href="/partner">Partners</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <button
          aria-label="Open menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
          onClick={() => setOpen(true)}
          style={{ backgroundColor: "#0a2351" }}
        >
          <Menu className="h-6 w-6" />
        </button>
      </header>
      {open && (
        <div
          className="fixed inset-0 z-50"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85%] p-4 text-white"
            style={{ backgroundColor: "#0a2351" }}
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="font-extrabold tracking-wide">FAST JOB CAREER</span>
              <button
                aria-label="Close menu"
                className="rounded-md p-2"
                onClick={() => setOpen(false)}
                style={{ color: "#ffcc00" }}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="mb-2 grid grid-cols-1 gap-2">
              <Link
                href="/auth/login"
                onClick={() => setOpen(false)}
                className="w-full rounded-md px-4 py-2 text-center font-semibold"
                style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                onClick={() => setOpen(false)}
                className="w-full rounded-md px-4 py-2 text-center font-semibold"
                style={{ backgroundColor: "#ffcc00", color: "#0a2351" }}
              >
                My Applications
              </Link>
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="w-full rounded-md px-4 py-2 text-center font-semibold"
                style={{ border: "1px solid #ffcc00", color: "#ffcc00" }}
              >
                Register
              </Link>
            </div>
            <nav className="mt-4 flex flex-col gap-3">
              <Link onClick={() => setOpen(false)} href="/">Home</Link>
              <Link onClick={() => setOpen(false)} href="/find-jobs">Find Jobs</Link>
              <Link onClick={() => setOpen(false)} href="/travel">Travel</Link>
              <Link onClick={() => setOpen(false)} href="/resource-hub">Resource Hub</Link>
              <Link onClick={() => setOpen(false)} href="/categories">All Categories</Link>
              <Link onClick={() => setOpen(false)} href="/sections">All Sections</Link>
              <Link onClick={() => setOpen(false)} href="/partner">Partners</Link>
              <Link onClick={() => setOpen(false)} href="/about">About</Link>
              <Link onClick={() => setOpen(false)} href="/contact">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
