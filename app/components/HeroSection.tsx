"use client";

import { useState, useEffect } from "react";

const montserrat = { className: "font-sans" };

export function HeroSection() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const newScale = 1 + Math.min(scrollY / screenHeight, 1) * 1;
      setScale(newScale);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${montserrat.className} flex flex-col h-screen gap-0 items-center justify-center px-4 sticky top-0 bg-white z-10 overflow-hidden`}
    >
      <div className="mb-28">
        <div
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-transform duration-100 ease-out text-center mb-4 sm:mb-6 md:mb-6 px-2"
          style={{
            transform: scale < 1.2 ? `scale(${scale})` : `scale(${1.2})`,
          }}
        >
          ANA Law Group
        </div>
        <div className="text-sm xs:text-base sm:text-lg md:text-xl mb-20 sm:mb-28 md:mb-32 text-center px-4 max-w-2xl">
          Law, with precision. Practice, with perspective
        </div>
      </div>
    </div>
  );
}
