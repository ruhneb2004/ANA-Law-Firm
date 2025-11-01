import { SubTopicContent } from "./SubTopicContentComp";
import { notFound } from "next/navigation";

// --- Mock Data ---
// This object maps your subtopic IDs (slugs) to their detailed content.
// In a real app, you would fetch this from a CMS or database.
const allSubTopicData = {
  // Corporate
  franchising: {
    title: "Franchising & Licensing",
    imageUrl: "/blog1.jpg",
    content:
      "This is the detailed content for Franchising & Licensing. It explores the intricate legal frameworks governing franchise operations and intellectual property licensing. We advise on everything from initial agreement drafting to dispute resolution, ensuring your brand is protected while you expand. Key areas include IP & Brand Strategy, compliance with Online Content & Media regulations, and adherence to Packaging & Consumer Law.",
  },
  ipstrategy: {
    title: "IP & Brand Strategy",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for IP & Brand Strategy. Our team helps you build and defend your most valuable assets: your intellectual property. We go beyond simple registration, developing comprehensive strategies that align with your business goals. This includes managing portfolios, litigating Trademark Infringement cases, and navigating the complexities of Online Content & Media.",
  },
  employment: {
    title: "Employment & HR Advisory",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Employment & HR Advisory. We provide guidance on all aspects of the employment lifecycle, from hiring to termination. This includes drafting contracts, ensuring Data Protection & Privacy compliance for employee data, and managing Cross-Border Coordination for international workforces.",
  },
  fintech: {
    title: "FinTech & Digital Business",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for FinTech & Digital Business. The digital economy presents unique challenges. We assist clients in navigating Data Localisation laws, regulatory sandboxes, and the specific rules governing Banking & Financial Disputes in the digital space.",
  },

  // Disputes
  trademark: {
    title: "Trademark Infringement",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Trademark Infringement. Protecting your brand's identity is paramount. We handle contentious matters including opposition, cancellation, and litigation. Our strategy often involves coordinating with IP & Brand Strategy teams and managing takedowns for Online Content & Media.",
  },
  crossborder: {
    title: "Cross-Border Coordination",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Cross-Border Coordination. Managing legal issues across multiple jurisdictions is complex. We act as a central hub, coordinating takedowns, managing international Banking & Financial Disputes, and ensuring seamless Employment & HR Advisory for global teams.",
  },
  onlinecontent: {
    title: "Online Content & Media",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Online Content & Media. We advise on issues from defamation and intermediary liability to AI Governance and digital advertising standards. This practice area is closely linked with IP & Brand Strategy, Takedowns, and Packaging & Consumer law.",
  },
  banking: {
    title: "Banking & Financial Services Disputes",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Banking & Financial Services Disputes. We represent clients in complex financial litigation, regulatory investigations, and enforcement actions. Our expertise includes handling Cross-Border Coordination for international cases and advising FinTech & Digital Business clients.",
  },

  // Regulatory
  dataprotection: {
    title: "Data Protection & Privacy",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Data Protection & Privacy. We help clients navigate the global patchwork of privacy laws. Our work includes building compliance programs, managing data breaches, and advising on AI Governance. This is critical for Employment & HR (employee data) and Data Localisation strategies.",
  },
  datalocalisation: {
    title: "Data Localisation",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Data Localisation. We provide strategic advice on data residency and cross-border data transfer requirements. This is a key consideration for Data Protection & Privacy, AI Governance, and operations in the FinTech & Digital Business sector.",
  },
  aigovernance: {
    title: "AI Governance & Accountability",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for AI Governance & Accountability. As AI becomes ubiquitous, we help clients build ethical and compliant AI systems. This involves Data Protection & Privacy assessments, managing Data Localisation for training models, and advising on liability for AI-generated Online Content & Media.",
  },
  packaging: {
    title: "Packaging & Consumer Law",
    imageUrl: "/blog1.jpg",

    content:
      "This is the detailed content for Packaging & Consumer Law. We ensure your products meet all regulatory requirements, from labeling to advertising. This practice intersects with Franchising & Licensing agreements, protects your IP & Brand Strategy, and governs your Online Content & Media advertising.",
  },
};

// Helper function to get the data (simulates an async API call)
async function getSubTopicData(slug: string) {
  // Find the data. The 'as keyof' part is for TypeScript safety.
  const data = allSubTopicData[slug as keyof typeof allSubTopicData];

  if (!data) {
    return null; // Not found
  }
  return data;
}

// --- The Page Component ---
export default async function SubTopicPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch the data based on the slug from the URL
  const data = await getSubTopicData(params.slug);

  // If no data, render the 404 page
  if (!data) {
    notFound();
  }

  // Render the content using your component
  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <SubTopicContent
          title={data.title}
          imageUrl={data.imageUrl}
          content={data.content}
        />
      </div>
    </div>
  );
}
