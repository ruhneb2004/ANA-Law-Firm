// types.ts - Define types for better type safety
export interface SubTopic {
  id: string;
  name: string;
  items: string[];
  imageUrl: string;
  content: string; // Full detailed content
}

export interface PracticeArea {
  id: string;
  title: string;
  description: string;
  subtopics: SubTopic[];
}

// practiceAreas.ts - Main data export
export const practiceAreas: PracticeArea[] = [
  {
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
  },
  {
    id: "disputes",
    title: "DISPUTES",
    description:
      "Comprehensive dispute resolution services combining litigation expertise with strategic settlement approaches.",
    subtopics: [
      {
        id: "trademark",
        name: "Trademark Infringement",
        items: [
          "IP & Brand Strategy",
          "Online Content & Media",
          "Cross-Border Coordination",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Trademark Infringement. Protecting your brand's identity is paramount. We handle contentious matters including opposition, cancellation, and litigation. Our strategy often involves coordinating with IP & Brand Strategy teams and managing takedowns for Online Content & Media.",
      },
      {
        id: "crossborder",
        name: "Cross-Border Coordination",
        items: [
          "Takedowns & Enforcement",
          "Banking & Financial Disputes",
          "Employment & HR Advisory",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Cross-Border Coordination. Managing legal issues across multiple jurisdictions is complex. We act as a central hub, coordinating takedowns, managing international Banking & Financial Disputes, and ensuring seamless Employment & HR Advisory for global teams.",
      },
      {
        id: "onlinecontent",
        name: "Online Content & Media",
        items: [
          "IP & Brand Strategy",
          "Takedowns",
          "AI Governance",
          "Packaging & Consumer",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Online Content & Media. We advise on issues from defamation and intermediary liability to AI Governance and digital advertising standards. This practice area is closely linked with IP & Brand Strategy, Takedowns, and Packaging & Consumer law.",
      },
      {
        id: "banking",
        name: "Banking & Financial Services Disputes",
        items: ["Cross-Border Coordination", "FinTech & Digital Business"],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Banking & Financial Services Disputes. We represent clients in complex financial litigation, regulatory investigations, and enforcement actions. Our expertise includes handling Cross-Border Coordination for international cases and advising FinTech & Digital Business clients.",
      },
    ],
  },
  {
    id: "regulatory",
    title: "REGULATORY & COMPLIANCE",
    description:
      "Navigate complex regulatory frameworks with confidence through proactive compliance strategies and expert guidance.",
    subtopics: [
      {
        id: "dataprotection",
        name: "Data Protection & Privacy",
        items: [
          "Employment & HR",
          "Data Localisation",
          "AI Governance & Accountability",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Data Protection & Privacy. We help clients navigate the global patchwork of privacy laws. Our work includes building compliance programs, managing data breaches, and advising on AI Governance. This is critical for Employment & HR (employee data) and Data Localisation strategies.",
      },
      {
        id: "datalocalisation",
        name: "Data Localisation",
        items: [
          "Data Protection & Privacy",
          "AI Governance & Accountability",
          "FinTech & Digital Business",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Data Localisation. We provide strategic advice on data residency and cross-border data transfer requirements. This is a key consideration for Data Protection & Privacy, AI Governance, and operations in the FinTech & Digital Business sector.",
      },
      {
        id: "aigovernance",
        name: "AI Governance & Accountability",
        items: [
          "Data Protection & Privacy",
          "Data Localisation",
          "Online Content & Media",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for AI Governance & Accountability. As AI becomes ubiquitous, we help clients build ethical and compliant AI systems. This involves Data Protection & Privacy assessments, managing Data Localisation for training models, and advising on liability for AI-generated Online Content & Media.",
      },
      {
        id: "packaging",
        name: "Packaging & Consumer Law",
        items: [
          "Franchising & Licensing",
          "IP & Brand Strategy",
          "Online Content & Media",
        ],
        imageUrl: "/blog1.jpg",
        content:
          "This is the detailed content for Packaging & Consumer Law. We ensure your products meet all regulatory requirements, from labeling to advertising. This practice intersects with Franchising & Licensing agreements, protects your IP & Brand Strategy, and governs your Online Content & Media advertising.",
      },
    ],
  },
];

// Helper function to get subtopic data by slug
export function getSubTopicData(slug: string): SubTopic | null {
  for (const area of practiceAreas) {
    const subtopic = area.subtopics.find((st) => st.id === slug);
    if (subtopic) {
      return subtopic;
    }
  }
  return null;
}

// Helper function to get all subtopic slugs (useful for static generation)
export function getAllSubTopicSlugs(): string[] {
  return practiceAreas.flatMap((area) => area.subtopics.map((st) => st.id));
}
