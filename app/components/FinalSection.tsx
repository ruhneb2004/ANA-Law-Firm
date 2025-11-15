"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { TopicComp } from "./TopicComp";
import { PracticeArea } from "../subTopicContent";

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
      {/* Black Section */}
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
      <div className="absolute w-full h-screen bg-white inset-0"></div>

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
