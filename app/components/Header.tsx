"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HamburgerIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative z-50" ref={headerRef}>
      <div className="flex flex-row justify-between items-center p-6 md:p-8">
        <div className="flex items-center justify-center transition-transform duration-500 hover:rotate-12 hover:scale-110">
          <Link href="/">
            <Image alt="logo" src={"/Logo.avif"} width={40} height={40} />
          </Link>
        </div>

        <nav className="hidden md:flex justify-between gap-16 lg:gap-24 px-10 text-[16px] items-center font-light text-red-900">
          <Link href={"/"} className="hover:underline">
            Home
          </Link>
          <Link href={"/blog"} className="hover:underline">
            Blog
          </Link>
          <Link href={"/legal"} className="hover:underline">
            First Steps, Legally
          </Link>
          <Link href={"/practiceArea"} className="hover:underline">
            Practice Area
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-red-900"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center p-4">
          <Link
            href={"/"}
            className="py-3 text-red-900 hover:underline w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href={"/blog"}
            className="py-3 text-red-900 hover:underline w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href={"/legal"}
            className="py-3 text-red-900 hover:underline w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            First Steps, Legally
          </Link>
          <Link
            href={"/practiceArea"}
            className="py-3 text-red-900 hover:underline w-full text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Practice Area
          </Link>
        </nav>
      )}
    </header>
  );
};
