"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TopicComp } from "./TopicComp";
import { PracticeArea } from "../subTopicContent";
import { MarqueeDemo } from "./TestimonialMarquee";

const playfair = { className: "font-serif" };

const topicCompData: PracticeArea = {
  id: "corporate",
  title: "CORPORATE & TRANSACTIONS",
  description:
    "Strategic legal counsel for business growth, investments, and commercial operations across diverse industries.",
  subtopics: [
    {
      id: "franchising",
      name: "Franchising & Licensing",
      items: [
        "IP & Brand Strategy",
        "Online Content & Media",
        "Packaging & Consumer Law",
      ],
      imageUrl: "/blog1.jpg",
      content:
        "This is the detailed content for Franchising & Licensing. It explores the intricate legal frameworks governing franchise operations and intellectual property licensing. We advise on everything from initial agreement drafting to dispute resolution, ensuring your brand is protected while you expand. Key areas include IP & Brand Strategy, compliance with Online Content & Media regulations, and adherence to Packaging & Consumer Law.",
    },
    {
      id: "ipstrategy",
      name: "IP & Brand Strategy",
      items: [
        "Franchising & Licensing",
        "Trademark Infringement",
        "Online Content & Media",
      ],
      imageUrl: "/blog1.jpg",
      content:
        "This is the detailed content for IP & Brand Strategy. Our team helps you build and defend your most valuable assets: your intellectual property. We go beyond simple registration, developing comprehensive strategies that align with your business goals. This includes managing portfolios, litigating Trademark Infringement cases, and navigating the complexities of Online Content & Media.",
    },
    {
      id: "employment",
      name: "Employment & HR Advisory",
      items: ["Cross-Border Coordination", "Data Protection & Privacy"],
      imageUrl: "/blog1.jpg",
      content:
        "This is the detailed content for Employment & HR Advisory. We provide guidance on all aspects of the employment lifecycle, from hiring to termination. This includes drafting contracts, ensuring Data Protection & Privacy compliance for employee data, and managing Cross-Border Coordination for international workforces.",
    },
    {
      id: "fintech",
      name: "FinTech & Digital Business",
      items: ["Data Localisation", "Banking & Financial Disputes"],
      imageUrl: "/blog1.jpg",
      content:
        "This is the detailed content for FinTech & Digital Business. The digital economy presents unique challenges. We assist clients in navigating Data Localisation laws, regulatory sandboxes, and the specific rules governing Banking & Financial Disputes in the digital space.",
    },
  ],
};
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
      {/* Black Section (Fading Text) */}
      <motion.div
        style={{ opacity: blackOpacity }}
        className="sticky top-0 h-screen w-full flex items-center justify-center bg-white px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 z-40"
      >
        <motion.p
          style={{ opacity: textOpacity }}
          className={`${playfair.className} text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-medium text-[#8D1A1B] text-center max-w-5xl leading-relaxed`}
        >
          We don&apos;t want you to worry about the legalities of your vision.
          Leave that to us.
        </motion.p>
      </motion.div>

      {/* This is the white background for the Fading Text section */}
      <div className="absolute w-full h-screen bg-white inset-0"></div>

      {/* "How It All Started" Section */}
      <motion.div
        style={{ opacity: 1 }}
        className="absolute top-[100vh] w-full overflow-hidden h-screen z-20"
      >
        <section className=" bg-white w-full h-full">
          <div className="max-w-7xl flex flex-col gap-10 mx-auto px-4 xs:px-6 sm:px-8 lg:px-8">
            {/*
        THIS BLOCK IS FIXED:
        - Removed the 'md:col-span-1' and 'md:col-span-2' divs.
        - Placed h2 and p directly inside 'text-center'.
        - Added 'space-y-4' for spacing.
      */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl xs:text-3xl sm:text-5xl tracking-tight text-gray-900">
                How It All Started
              </h2>
              <p className="text-sm xs:text-base sm:text-lg leading-relaxed text-gray-700">
                This is a space to share more about the business...
              </p>
            </div>

            <div className="w-full flex items-center rounded-lg sm:rounded-xl md:rounded-2xl object-cover">
              <MarqueeDemo />
            </div>
          </div>
        </section>
      </motion.div>

      {/* TopicComp Section */}
      <div className="absolute top-[200vh] h-screen w-full z-70">
        <div className="sticky top-0 h-screen w-full bg-gray-100">
          <div className="relative h-full" style={{ zIndex: 100 }}>
            <TopicComp
              area={topicCompData}
              bgColor="bg-[#8D1A1B]"
              textColor="text-white"
              isRedBg={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
