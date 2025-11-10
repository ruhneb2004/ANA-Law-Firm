"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ConstellationNetwork from "./GraphComponent";

const playfair = { className: "font-serif" };

export function FinalSection() {
  const finalRef = useRef(null);
  const { scrollYProgress: finalProgress } = useScroll({
    target: finalRef,
    offset: ["start start", "center start"],
  });

  const blackOpacity = useTransform(finalProgress, [0, 0.5], [1, 0]);
  const textOpacity = useTransform(finalProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={finalRef} className="relative h-[300vh] w-full z-60">
      {/* Black Section */}
      <motion.div
        style={{ opacity: blackOpacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-[#8D1A1B] px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 z-40"
      >
        <motion.p
          style={{ opacity: textOpacity }}
          className={`${playfair.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium text-white text-center max-w-5xl leading-relaxed`}
        >
          We don&apos;t want you to worry about the legalities of your vision.
          Leave that to us.
        </motion.p>
      </motion.div>
      <div className="absolute w-full h-screen bg-[#8D1A1B] inset-0"></div>

      {/* White Section */}
      <motion.div
        style={{ opacity: 1 }}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-white z-20"
      >
        <section className="bg-white w-full">
          <div className="max-w-7xl mx-auto px-4 xs:px-6 sm:px-8 lg:px-8">
            <Image
              className="w-full aspect-video sm:aspect-5/2 rounded-lg sm:rounded-xl md:rounded-2xl object-cover mb-8 xs:mb-10 sm:mb-12 md:mb-16"
              src="/landscape.avif"
              alt="Aerial view of a modern plaza"
              width={1920}
              height={768}
              priority
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16">
              <div className="lg:col-span-1">
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4 lg:mb-0">
                  How It All Started
                </h2>
              </div>

              <div className="lg:col-span-2 space-y-4 xs:space-y-5 sm:space-y-6">
                <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
                  This is a space to share more about the business...
                </p>
                <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
                  Let the writing speak for itself...
                </p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <div className="relative h-screen w-full z-70">
        <div className="sticky top-0 h-screen w-full bg-gray-100">
          <div className="relative h-full" style={{ zIndex: 100 }}>
            <ConstellationNetwork />
          </div>
        </div>
      </div>
    </div>
  );
}
