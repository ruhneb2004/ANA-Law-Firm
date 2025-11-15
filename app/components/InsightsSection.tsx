"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const montserrat = { className: "font-sans" };
const playfair = { className: "font-serif" };

export function InsightsSection() {
  const insightsRef = useRef(null);
  const { scrollYProgress: insightsProgress } = useScroll({
    target: insightsRef,
    offset: ["start end", "end start"],
  });

  const insightCard1Y = useTransform(
    insightsProgress,
    [0.25, 0.4],
    ["100%", "0%"]
  );

  const insightCard2Y = useTransform(
    insightsProgress,
    [0.4, 0.55],
    ["100%", "0%"]
  );

  const insightCard3Y = useTransform(
    insightsProgress,
    [0.55, 0.7],
    ["100%", "0%"]
  );

  const insightsTitleY = useTransform(
    insightsProgress,
    [0.8, 0.98],
    ["0vh", "42vh"]
  );

  return (
    <div ref={insightsRef} className="relative h-[500vh] w-full z-40">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Base Layout */}
        <div className="absolute inset-0 bg-white flex items-start justify-start">
          <div className="w-full h-full flex flex-col md:flex-row">
            {/* Left Content */}
            <motion.div
              style={{ y: insightsTitleY }}
              className={`${montserrat.className} w-full md:w-4/11 h-full flex flex-col items-center justify-center px-6 xs:px-8 sm:px-10 md:px-12 py-8 md:py-0`}
            >
              <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-6xl font-light text-[#8D1A1B] mb-4 xs:mb-5 sm:mb-6">
                Insights
              </h2>
              <Link
                href={"/blog"}
                className="group flex items-center gap-3 text-gray-900 text-sm xs:text-base sm:text-lg hover:text-[#8D1A1B] transition-colors duration-300"
              >
                <span className="hover:underline">explore more</span>
                <svg
                  className="w-3 h-3 xs:w-4 xs:h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </motion.div>

            {/* Right side - Hidden on mobile, shown on md+ */}
            <div className="hidden md:block w-full md:w-7/11 h-full bg-[url('/newsPaperHomePage.avif')] bg-cover bg-center bg-no-repeat"></div>
          </div>
        </div>

        {/* Card 1 */}
        <motion.div
          style={{ y: insightCard1Y }}
          className="absolute left-0 md:left-[calc(4/11*100%)] bottom-0 w-full md:w-[calc(7/11*100%/2)] h-screen bg-[#F3EBD3] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-center overflow-y-auto"
        >
          <h3
            className={`${playfair.className} text-xl xs:text-2xl sm:text-3xl italic font-medium text-[#8D1A1B] mb-4 xs:mb-5 sm:mb-6`}
          >
            FSSAI License Requirements
          </h3>
          <p
            className={`${montserrat.className} text-sm xs:text-base sm:text-lg md:text-lg text-gray-900 leading-relaxed xs:leading-7 sm:leading-8 mb-4 xs:mb-5 sm:mb-6`}
          >
            Telecommunications and entertainment law matters, and his practice
            encompasses litigation and commercial/transactional advice. He has
            also advised many multinational banks on Indian data protection law,
            outsourcing Telecommunications and entertainment law matters, and
            his practice encompasses litigation and commercial/transactional
            advice. He has also advised many multinational banks on Indian data
            protection law, outsourcing Indian data protection . . .
          </p>
          <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
            read more
          </button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          style={{ y: insightCard2Y }}
          className="absolute left-0 md:right-0 md:left-auto bottom-0 w-full md:w-[calc(7/11*100%/2)] h-screen bg-[#E8E0D5] p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-center overflow-y-auto"
        >
          <h3
            className={`${playfair.className} text-xl xs:text-2xl sm:text-3xl italic font-medium text-[#8D1A1B] mb-4 xs:mb-5 sm:mb-6`}
          >
            How to Prepare - DPDPAct
          </h3>
          <p
            className={`${montserrat.className} text-sm xs:text-base sm:text-lg md:text-lg text-gray-900 leading-relaxed xs:leading-7 sm:leading-8 mb-4 xs:mb-5 sm:mb-6`}
          >
            Siam Sunset Sparkler telecommunications and entertainment law
            matters, and his practice encompasses litigation and
            commercial/transactional advice. He has also advised many
            multinational banks on Indian data protection law, outsourcing Siam
            Sunset Sparkler telecommunications and entertainment law matters,
            and his practice encompasses litigation and commercial/transactional
            advice. He has also advised many multinational banks on Indian data
            protection law, outsourcing Siam Sunset . . .
          </p>
          <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
            read more
          </button>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          style={{ y: insightCard3Y }}
          className="absolute left-0 md:right-0 md:left-auto bottom-0 w-full md:w-[calc(7/11*100%)] h-screen bg-[#B4ADA3] flex items-center overflow-hidden"
        >
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
            <div className="p-6 xs:p-8 sm:p-10 md:p-12 flex flex-col justify-center overflow-y-auto">
              <h3
                className={`${playfair.className} text-xl xs:text-2xl sm:text-3xl italic font-medium text-[#8D1A1B] mb-4 xs:mb-5 sm:mb-6`}
              >
                Chips of Change: Navigating India&apos;s Semiconductor Legal
                Landscape
              </h3>
              <p
                className={`${montserrat.className} text-sm xs:text-base sm:text-lg md:text-lg text-gray-900 leading-relaxed xs:leading-7 sm:leading-8 mb-4 xs:mb-5 sm:mb-6`}
              >
                Given the global nature of the semiconductor supply chain, the
                blog will highlight legal implications for joint ventures and
                partnerships, addressing areas like data security,
                confidentiality, and technology transfer agreements. The piece
                aims to provide strategic legal insights for both domestic and
                international players eyeing India as a potential hub in the
                global semiconductor ecosystem, ensuring they understand the
                legal pillars supporting this &quot;chip of change.&quot; The
                piece aims to provide strategic legal insights for both domestic
                and international players eyeing India as a potential hub in the
                global semicon . . .
              </p>
              <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
                read more
              </button>
            </div>

            <div className="hidden md:block relative h-full">
              <Image
                src="/semiConductor.avif"
                alt="Semiconductor chips"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
