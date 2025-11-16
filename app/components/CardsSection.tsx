"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function CardsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const card1X = useTransform(scrollYProgress, [0.05, 0.2], ["200%", "0%"]);
  const card1Rotate = useTransform(scrollYProgress, [0.05, 0.2], [45, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  const card2X = useTransform(scrollYProgress, [0.2, 0.35], ["200%", "0%"]);
  const card2Rotate = useTransform(scrollYProgress, [0.2, 0.35], [45, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const card3X = useTransform(scrollYProgress, [0.35, 0.5], ["200%", "0%"]);
  const card3Rotate = useTransform(scrollYProgress, [0.35, 0.5], [45, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative -mt-32 xs:-mt-36 sm:-mt-44 md:-mt-39 h-[250vh] w-full bg-transparent z-20"
    >
      <div className="sticky top-0 min-h-screen h-auto flex flex-col items-center justify-center bg-[#8D1A1B] w-[96%] sm:w-[94%] mx-auto overflow-hidden px-3 xs:px-4 sm:px-6 md:px-8 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl my-auto">
          {/* CARD 1 */}
          <motion.div
            style={{ x: card1X, rotate: card1Rotate, opacity: card1Opacity }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white  lg:h-128 xl:h-104"
          >
            <div>
              <div className="italic font-light text-2xl xs:text-3xl sm:text-4xl md:text-[45px] leading-8 text-center">
                Precision
              </div>
              <div className="mb-2 xs:mb-3 sm:mb-4 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px] text-center"></div>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-snug text-center text-white/90">
                Our commitment to legal excellence is defined by precision in
                every detail. We deliver meticulously researched advice and
                documentation, ensuring every strategy is tailored for the best
                possible client outcome.
              </p>
            </div>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            style={{ x: card2X, rotate: card2Rotate, opacity: card2Opacity }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white  lg:h-128 xl:h-104 text-center"
          >
            <div>
              <div className="leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                Quality
              </div>
              <div className="italic font-light leading-tight mb-2 xs:mb-3 sm:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-[45px]"></div>
              <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-snug text-white/90">
                Our strength lies in our strong commitment to providing the
                highest quality of services for businesses & individuals alike.
                Anything the client needs help with legally, we deliver.
              </p>
            </div>
          </motion.div>

          {/* CARD 3 */}
          <motion.div
            style={{ x: card3X, rotate: card3Rotate, opacity: card3Opacity }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
            className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white lg:h-128 xl:h-104 text-center"
          >
            <div>
              <div className="mb-1 xs:mb-2 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                Never Unprepared <br />
                <span className="italic">Everything</span>
              </div>
              <div className="mb-2 xs:mb-3 sm:mb-4 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]"></div>
              <p className="leading-snug text-sm xs:text-base sm:text-lg md:text-xl text-white/90">
                We live by our Motto of{" "}
                <span className="italic">“Nunqum Non Paratus”</span> or “Never
                Be Unprepared”, guaranteeing we are always ready to protect our
                clients&apso; interests.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
