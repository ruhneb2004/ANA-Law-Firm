"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const montserrat = { className: "font-sans" };
const playfair = { className: "font-serif" };

export function FoundationSection() {
  const foundationRef = useRef(null);
  const { scrollYProgress: foundationProgress } = useScroll({
    target: foundationRef,
    offset: ["start end", "end start"],
  });

  const foundationScale = useTransform(foundationProgress, [0, 1], [1.4, 1]);

  return (
    <div className="sticky top-0 bg-[url('/homePageImg1.avif')] z-40 bg-cover bg-center h-screen w-full flex items-center justify-center">
      <div className="absolute inset-0 bg-[#F3EBD3]/90"></div>

      <motion.div
        ref={foundationRef}
        className="relative z-10 max-w-5xl mx-auto px-4 xs:px-6 sm:px-8 md:px-12 text-center"
        style={{ scale: foundationScale }}
      >
        <h2
          className={`${playfair.className} text-2xl xs:text-3xl sm:text-4xl md:text-[38px] italic font-medium text-[#8D1A1B] mb-6 xs:mb-8 sm:mb-10 md:mb-12`}
        >
          The Foundation
        </h2>

        <div
          className={`${montserrat.className} text-sm sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed font-light space-y-4 px-16 sm:px-8 md:px-16 lg:px-32`}
        >
          <p>
            Rooted in India&apos;s commercial capital, we are a firm with over{" "}
            <span className="font-semibold">X</span> decades of experience,
            offering a comprehensive suite of legal services from Anti-trust to
            Technology, Media & Telecommunications for a diverse range of
            international and domestic clients. Our expertise extends to
            advising entities of all scales and prominence, from global leaders
            and major international corporations, all while upholding the
            highest ethical standards. We prioritise{" "}
            <span className="font-bold">deep understanding</span> of client
            requirements,{" "}
            <span className="font-bold">timely communication</span>, and
            building enduring relationships, ensuring a seamless, one-firm
            experience across our departments and network offices.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
