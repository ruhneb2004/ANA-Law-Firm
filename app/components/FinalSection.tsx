"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { TopicComp } from "./TopicComp";
import { PracticeArea } from "../subTopicContent";
import { MarqueeDemo } from "./TestimonialMarquee";
import GetInTouch from "./GetinTouch";

const playfair = { className: "font-serif" };

const topicCompData: PracticeArea = {
  id: "corporate",
  title: "Practice Areas",
  description:
    "Our expertise is structured to partner with today's enterprises, addressing legal needs across commercial transactions, evolving regulatory landscapes, and strategic conflict resolution.",
  subtopics: [
    {
      id: "franchising",
      name: "Corporate & Transactions",
      items: [
        "Corporate & Commercial",
        "Employment & HR Advisory",
        "Technology & Innovation",
        "Transactions & Investment",
      ],
      imageUrl: "/dark.jpeg",
      content:
        "This is the detailed content for Franchising & Licensing. It explores the intricate legal frameworks governing franchise operations and intellectual property licensing. We advise on everything from initial agreement drafting to dispute resolution, ensuring your brand is protected while you expand. Key areas include IP & Brand Strategy, compliance with Online Content & Media regulations, and adherence to Packaging & Consumer Law.",
    },
    {
      id: "ipstrategy",
      name: "Regulatory & Compliance",
      items: [
        "Consumer, Packaging & Product Regulation",
        "Data, Technology & AI Regulation",
        "Trade, Competition & Foreign Investment",
        "Sustainability, Policy & Administrative Compliance",
      ],
      imageUrl: "/dark.jpeg",

      content:
        "This is the detailed content for IP & Brand Strategy. Our team helps you build and defend your most valuable assets: your intellectual property. We go beyond simple registration, developing comprehensive strategies that align with your business goals. This includes managing portfolios, litigating Trademark Infringement cases, and navigating the complexities of Online Content & Media.",
    },
    {
      id: "employment",
      name: "Disputes",
      items: [
        "Civil & Commercial Litigation",
        "Cross-border Coordination & Enforcement",
        "Arbitration, Mediation and other Forms of Dispute Resolution",
        "Digital, Brand & Platform Enforcement",
      ],
      imageUrl: "/dark.jpeg",

      content:
        "This is the detailed content for Employment & HR Advisory. We provide guidance on all aspects of the employment lifecycle, from hiring to termination. This includes drafting contracts, ensuring Data Protection & Privacy compliance for employee data, and managing Cross-Border Coordination for international workforces.",
    },
  ],
};

export function FinalSection() {
  const finalRef = useRef(null);
  const { scrollYProgress: finalProgress } = useScroll({
    target: finalRef,
    offset: ["start start", "center start"],
  });

  const blackOpacity = useTransform(finalProgress, [0, 0.2], [1, 0]);
  const textOpacity = useTransform(finalProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={finalRef} className="relative h-[500vh] w-full z-60">
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
        className="absolute top-[100vh] w-full overflow-hidden text-center h-screen z-20"
      >
        <section className=" bg-white flex items-center  justify-center w-full h-full">
          <div className="max-w-7xl flex flex-col gap-10 mx-auto  xs:px-6 sm:px-8 lg:px-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl  sm:text-5xl tracking-tight text-gray-900">
                Reputation Built on Reliability
              </h2>
              <p className="text-sm xs:text-base sm:text-lg leading-relaxed px-100 sm:px-78 md:px-58 lg:px-42 text-gray-600">
                Our reputation for reliability is built on navigating the
                highest stakes across continents. We successfully advise some of
                the world&apos;s biggest and most transformative digital
                platforms, leading enterprises in the global aviation and
                transport sectors, major players in the food & beverage and
                packaging industries, and various other key sectors, ensuring
                their legal strategy matches their ambitious scale.
              </p>
            </div>

            <div className="w-full flex items-center rounded-lg sm:rounded-xl md:rounded-2xl object-cover">
              <MarqueeDemo />
            </div>
          </div>
        </section>
      </motion.div>
      {/* TopicComp Section */}
      <div className="absolute top-[200vh] h-[300vh] w-full z-70">
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
        <GetInTouch />
      </div>
    </div>
  );
}
