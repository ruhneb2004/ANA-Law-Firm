"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function GetInTouch() {
  const insightsRef = useRef(null);
  const { scrollYProgress: insightsProgress } = useScroll({
    target: insightsRef,
    offset: ["start end", "end start"],
  });

  const insightCard1Y = useTransform(
    insightsProgress,
    [0.25, 0.4, 0.5, 0.55, 0.7],
    ["100%", "3.75rem", "3.75rem", "0rem", "0%"]
  );

  const insightCard2Y = useTransform(
    insightsProgress,
    [0.4, 0.5, 0.55, 0.7],
    ["100%", "3.75rem", "0rem", "0%"]
  );

  const cardHeight = useTransform(
    insightsProgress,
    [0.55, 0.7],
    ["calc(100vh - 3.75rem)", "100vh"]
  );

  const cardBorderRadius = useTransform(
    insightsProgress,
    [0.5, 0.55],
    ["40px", "0px"]
  );

  return (
    <div
      ref={insightsRef}
      className="relative bg-[#8D1A1B] lg:bg-transparent   h-[200vh] w-full z-40"
    >
      <div className="sticky top-0 h-screen flex w-full overflow-hidden p-4 sm:p-6 md:p-10">
        {/* Base Layout - Full Width Insights Title */}
        <div className="absolute top-4 right-4 left-4 bottom-0 sm:top-8 sm:right-8 sm:left-8 md:top-15 md:right-15 md:left-15 rounded-t-[20px] sm:rounded-t-[30px] md:rounded-t-[40px] w-auto bg-black flex items-center justify-center">
          <div className="w-full h-full flex flex-col items-center justify-center px-4 xs:px-6 sm:px-8 md:px-10">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-light text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6">
              Next Steps
            </h2>
          </div>
        </div>

        {/* Left Card - Get in Touch */}
        <motion.div
          style={{
            y: insightCard1Y,
            height: cardHeight,
            borderTopLeftRadius: cardBorderRadius,
            borderTopRightRadius: "0px",
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
          }}
          className="absolute text-center items-center left-4 bottom-0 w-[calc(100%-2rem)] sm:left-8 sm:w-[calc(50%-2rem)] md:left-15 md:w-[calc(50%-3.75rem)] bg-black p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center overflow-y-auto"
        >
          <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white mb-3 xs:mb-4 sm:mb-5 md:mb-6">
            Get in Touch
          </h3>
          <a href="mailto:your-email@example.com">
            <svg
              width="80"
              height="80"
              viewBox="0 0 200 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6 sm:mb-8 fill-[#8D1A1B] hover:fill-[#c92124] cursor-pointer transition-colors duration-300 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
            >
              <path d="M98.322 180v-60.16c0-4.101-3.345-6.551-6.58-6.551-1.714 0-3.341.684-4.584 1.927l-42.54 42.54-2.374-2.374 42.54-42.54c1.906-1.906 2.449-4.637 1.417-7.127s-3.346-4.037-6.042-4.037H20v-3.356h60.16c2.695 0 5.01-1.547 6.042-4.037 1.031-2.49.489-5.221-1.417-7.127l-42.54-42.54 2.374-2.374 42.54 42.54c1.242 1.243 2.87 1.927 4.584 1.927 3.234 0 6.58-2.451 6.58-6.551V20h3.356v60.16c0 1.841.724 3.531 2.039 4.758a6.72 6.72 0 0 0 4.542 1.793c1.714 0 3.341-.684 4.584-1.927l42.54-42.54 2.374 2.374-42.54 42.54c-1.906 1.906-2.449 4.637-1.417 7.127 1.031 2.49 3.346 4.037 6.042 4.037H180v3.356h-60.16c-2.695 0-5.01 1.547-6.042 4.037s-.489 5.221 1.417 7.127l42.54 42.54-2.374 2.374-42.54-42.54c-1.242-1.243-2.87-1.927-4.584-1.927-3.234 0-6.58 2.451-6.58 6.551V180h-3.355zm-12.937-40.315-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zm46.443-113.097-2.878-1.182-14.335 34.909 2.878 1.182 14.335-34.909zM61.497 82.507 26.588 68.171l-1.182 2.878 34.909 14.335 1.182-2.877zm113.098 46.443-34.909-14.335-1.182 2.878 34.909 14.335 1.182-2.878zM61.604 117.728l-1.2-2.871-34.82 14.548 1.2 2.871 34.82-14.548zm112.813-47.132-1.2-2.871-34.821 14.548 1.2 2.871 34.821-14.548zM85.144 60.404 70.596 25.583l-2.871 1.2 14.548 34.821 2.871-1.2zm47.131 112.813-14.548-34.821-2.871 1.2 14.548 34.821 2.871-1.2z" />
            </svg>
          </a>
        </motion.div>

        {/* Right Card - Practice Areas */}
        <motion.div
          style={{
            y: insightCard2Y,
            height: cardHeight,
            borderTopLeftRadius: "0px",
            borderTopRightRadius: cardBorderRadius,
            borderBottomLeftRadius: "0px",
            borderBottomRightRadius: "0px",
            backgroundImage: "url('/right_cover_image.avif')",
          }}
          className="absolute right-4 bottom-0 w-[calc(100%-2rem)] sm:right-8 sm:w-[calc(50%-2rem)] md:right-15 md:w-[calc(50%-3.75rem)] p-4 xs:p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center items-center text-center overflow-y-auto bg-black/90 cursor-pointer group"
          onClick={() => (window.location.href = "/practiceArea")}
        >
          <div className="absolute inset-0 bg-black/80 group-hover:bg-black/70 transition-all duration-700"></div>
          <h3 className="relative z-10 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-[#8D1A1B] mb-3 xs:mb-4 sm:mb-5 md:mb-6 px-4 sm:px-8 md:px-12 lg:px-24 py-8 sm:py-12 md:py-16 lg:py-24 leading-tight sm:leading-20">
            Explore Our Practice Areas
          </h3>
        </motion.div>
      </div>
    </div>
  );
}

export default GetInTouch;
