"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import Image from "next/image";
import ConstellationNetwork from "./components/GraphComponent";

// Mock fonts
const montserrat = { className: "font-sans" };
const playfair = { className: "font-serif" };

// Define interface for card transform
interface CardTransform {
  x: MotionValue<string>;
  rotate: MotionValue<number>;
  opacity: MotionValue<number>;
}

export default function Home() {
  // === TITLE ANIMATION ===
  const [scale, setScale] = useState(1);

  const foundationRef = useRef(null);
  const { scrollYProgress: foundationProgress } = useScroll({
    target: foundationRef,
    offset: ["start end", "end start"],
  });

  const foundationScale = useTransform(foundationProgress, [0, 1], [1.4, 1]);

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

  // === CARDS ANIMATION ===
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Create card transforms directly with hooks
  const card1X = useTransform(scrollYProgress, [0.05, 0.2], ["200%", "0%"]);
  const card1Rotate = useTransform(scrollYProgress, [0.05, 0.2], [45, 0]);
  const card1Opacity = useTransform(scrollYProgress, [0.05, 0.2], [0, 1]);

  const card2X = useTransform(scrollYProgress, [0.2, 0.35], ["200%", "0%"]);
  const card2Rotate = useTransform(scrollYProgress, [0.2, 0.35], [45, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.2, 0.35], [0, 1]);

  const card3X = useTransform(scrollYProgress, [0.35, 0.5], ["200%", "0%"]);
  const card3Rotate = useTransform(scrollYProgress, [0.35, 0.5], [45, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.35, 0.5], [0, 1]);

  const card1: CardTransform = {
    x: card1X,
    rotate: card1Rotate,
    opacity: card1Opacity,
  };
  const card2: CardTransform = {
    x: card2X,
    rotate: card2Rotate,
    opacity: card2Opacity,
  };
  const card3: CardTransform = {
    x: card3X,
    rotate: card3Rotate,
    opacity: card3Opacity,
  };

  // === FINAL FADE ANIMATION ===
  const finalRef = useRef(null);
  const { scrollYProgress: finalProgress } = useScroll({
    target: finalRef,
    offset: ["start start", "center start"],
  });

  const blackOpacity = useTransform(finalProgress, [0, 0.5], [1, 0]);
  const textOpacity = useTransform(finalProgress, [0, 0.5], [1, 0]);

  const handleNodeClick = (nodeId: string, nodeType: string) => {
    console.log("Node clicked:", nodeId, nodeType);
  };

  // === INSIGHTS CARDS ANIMATION ===
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
    <div className="relative text-[#8D1A1B]">
      {/* === TITLE SECTION === */}
      <div
        className={`${montserrat.className} flex flex-col h-screen gap-0 items-center justify-center px-4 sticky top-0 bg-white z-10 overflow-hidden`}
      >
        <div
          className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight transition-transform duration-100 ease-out text-center mb-4 sm:mb-6 md:mb-8 px-2"
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

      {/* === CARDS SECTION === */}
      <div
        ref={containerRef}
        className="relative -mt-32 xs:-mt-36 sm:-mt-44 md:-mt-54 h-[250vh] w-full bg-transparent z-20"
      >
        <div className="sticky top-0 min-h-screen h-auto flex flex-col items-center justify-center bg-[#8D1A1B] w-[96%] sm:w-[94%] mx-auto overflow-hidden px-3 xs:px-4 sm:px-6 md:px-8 py-12 xs:py-14 sm:py-16 md:py-20 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 xs:gap-5 sm:gap-6 md:gap-8 lg:gap-10 w-full max-w-7xl my-auto">
            {/* CARD 1 */}
            <motion.div
              style={card1}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white md:h-102"
            >
              <div>
                <div className="italic font-light text-2xl xs:text-3xl sm:text-4xl md:text-[45px] leading-tight">
                  Client First
                </div>
                <div className="mb-2 xs:mb-3 sm:mb-4 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                  Approach
                </div>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-snug text-white/90">
                  Our strength lies in our strong commitment to providing the
                  highest quality of services for businesses & individuals
                  alike. Anything the client needs help with legally, we
                  deliver.
                </p>
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              style={card2}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white"
            >
              <div>
                <div className="leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                  One Firm.
                </div>
                <div className="italic font-light leading-tight mb-2 xs:mb-3 sm:mb-4 text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                  Limitless Possibilities
                </div>
                <p className="text-sm xs:text-base sm:text-lg md:text-xl leading-snug text-white/90">
                  With our highly qualified teams, departments & network offices
                  across the globe and India, we provide an accessible &
                  dependable one-firm experience, ideal for long-term
                  relationships.
                </p>
              </div>
            </motion.div>

            {/* CARD 3 */}
            <motion.div
              style={card3}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="flex flex-col justify-between w-full max-w-sm lg:max-w-md p-4 xs:p-5 sm:p-6 md:p-8 bg-white/10 backdrop-blur-md rounded-lg sm:rounded-xl md:rounded-2xl shadow-lg text-white"
            >
              <div>
                <div className="mb-1 xs:mb-2 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                  Quality In <span className="italic">Everything</span>
                </div>
                <div className="mb-2 xs:mb-3 sm:mb-4 leading-tight text-2xl xs:text-3xl sm:text-4xl md:text-[45px]">
                  We Do
                </div>
                <p className="leading-snug text-sm xs:text-base sm:text-lg md:text-xl text-white/90">
                  Our services are as good as we are & hence we value personal
                  growth & performances of our teams, giving them opportunities
                  & raising their bars. Resulting in overall Client Happiness.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* === BOTTOM TEXT SECTION === */}
      <div
        className={`h-screen sticky top-0 flex bg-white items-center justify-center z-30 px-4 xs:px-6 sm:px-8 md:px-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 text-center ${playfair.className} font-medium`}
      >
        <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-medium max-w-4xl mx-auto leading-relaxed px-2">
          Our approach is built on providing thorough and precise guidance,
          where you get a complete solution the first time, every time.
        </p>
      </div>

      {/* === THE FOUNDATION SECTION === */}
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
            className={`${montserrat.className}  text-sm sm:text-lg md:text-xl lg:text-xl text-gray-900 leading-relaxed font-light space-y-4 px-16 sm:px-8 md:px-16 lg:px-32`}
          >
            <p>
              Rooted in India&apos;s commercial capital, we are a firm with over{" "}
              <span className="font-semibold">X</span> decades of experience,
              offering a comprehensive suite of legal services from Anti-trust
              to Technology, Media & Telecommunications for a diverse range of
              international and domestic clients. Our expertise extends to
              advising entities of all scales and prominence, from global
              leaders and major international corporations, all while upholding
              the highest ethical standards. We prioritise{" "}
              <span className="font-bold">deep understanding</span> of client
              requirements,{" "}
              <span className="font-bold">timely communication</span>, and
              building enduring relationships, ensuring a seamless, one-firm
              experience across our departments and network offices.
            </p>
          </div>
        </motion.div>
      </div>

      {/* === INSIGHTS SECTION === */}
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
                <button className="group flex items-center gap-3 text-gray-900 text-sm xs:text-base sm:text-lg hover:text-[#8D1A1B] transition-colors duration-300">
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
                </button>
              </motion.div>

              {/* Right side - Hidden on mobile, shown on md+ */}
              <div className="hidden md:block w-full md:w-7/11 h-full bg-[url('/newsPaperHomePage.avif')] bg-cover bg-center bg-no-repeat"></div>
            </div>
          </div>

          {/* Card 1 - Full width on mobile, half on desktop */}
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
              also advised many multinational banks on Indian data protection
              law, outsourcing Telecommunications and entertainment law matters,
              and his practice encompasses litigation and
              commercial/transactional advice. He has also advised many
              multinational banks on Indian data protection law, outsourcing
              Indian data protection . . .
            </p>
            <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
              read more
            </button>
          </motion.div>

          {/* Card 2 - Full width on mobile, half on desktop */}
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
              multinational banks on Indian data protection law, outsourcing
              Siam Sunset Sparkler telecommunications and entertainment law
              matters, and his practice encompasses litigation and
              commercial/transactional advice. He has also advised many
              multinational banks on Indian data protection law, outsourcing
              Siam Sunset . . .
            </p>
            <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
              read more
            </button>
          </motion.div>

          {/* Card 3 - Full width, stacks vertically on mobile */}
          <motion.div
            style={{ y: insightCard3Y }}
            className="absolute left-0 md:right-0 md:left-auto bottom-0 w-full md:w-[calc(7/11*100%)] h-screen bg-[#B4ADA3] flex items-center overflow-hidden"
          >
            <div className="w-full h-full grid grid-cols-1 md:grid-cols-2">
              {/* Left text area */}
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
                  piece aims to provide strategic legal insights for both
                  domestic and international players eyeing India as a potential
                  hub in the global semicon . . .
                </p>
                <button className="text-xs xs:text-sm font-semibold text-gray-900 hover:text-[#8D1A1B] transition-colors self-start">
                  read more
                </button>
              </div>

              {/* Right image area - Hidden on mobile, shown on md+ */}
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

      {/* === FINAL FADE SECTION === */}
      <div ref={finalRef} className="relative h-[300vh] w-full z-60">
        {/* Black Section */}
        <motion.div
          style={{ opacity: blackOpacity }}
          className="sticky top-0 h-screen w-full flex items-center justify-center bg-black px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 z-40"
        >
          <motion.p
            style={{ opacity: textOpacity }}
            className={`${playfair.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium text-white text-center max-w-5xl leading-relaxed`}
          >
            We don&apos;t want you to worry about the legalities of your vision.
            Leave that to us.
          </motion.p>
        </motion.div>
        <div className="absolute w-full h-screen bg-black inset-0"></div>

        {/* White Section */}
        <motion.div
          style={{ opacity: 1 }}
          className="sticky top-0 h-screen w-full flex items-center justify-center bg-white z-20 "
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
                    This is a space to share more about the business: who&apos;s
                    behind it, what it does and what this site has to offer.
                    It&apos;s an opportunity to tell the story behind the
                    business or describe a special service or product it offers.
                    You can use this section to share the company history or
                    highlight a particular feature that sets it apart from
                    competitors.
                  </p>
                  <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
                    Let the writing speak for itself. Keep a consistent tone and
                    voice throughout the website to stay true to the brand image
                    and give visitors a taste of the company&apos;s values and
                    personality.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
        <div className="relative h-screen w-full z-70">
          <div className="sticky top-0 h-screen w-full bg-gray-100">
            <div className="relative h-full" style={{ zIndex: 100 }}>
              <ConstellationNetwork onNodeClick={handleNodeClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
