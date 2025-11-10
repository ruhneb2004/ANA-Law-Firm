"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

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

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/legal", label: "First Steps, Legally" },
    { href: "/practiceArea", label: "Practice Area" },
  ];

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="relative z-50" ref={headerRef}>
      <div className="flex flex-row justify-between items-center p-6 md:p-8">
        <div className="flex items-center justify-center transition-transform duration-500 hover:rotate-12 hover:scale-110">
          <Link href="/">
            <Image alt="logo" src={"/ANA_Logo.avif"} width={200} height={200} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex justify-between gap-16 lg:gap-24 px-10 text-[#8D1A1B] text-[16px] items-center font-light">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:underline transition-all ${
                isActive(link.href) ? "underline" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#8D1A1B]"
          >
            {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full bg-white text-[#8D1A1B] shadow-lg flex flex-col items-center p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`py-3 hover:underline w-full text-center ${
                isActive(link.href) ? "underline" : ""
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};
