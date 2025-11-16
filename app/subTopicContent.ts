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
    title: "Corporate & Transactions",
    description: "",
    subtopics: [
      {
        id: "franchising",
        name: "Corporate & Commercial",
        items: [
          "Corporate Commercial",
          "Franchising & Licensing",
          "IP & Brand",
          "Real Estate",
          "Outsourcing & Technology Transactions",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Corporate and commercial work is where ideas turn into operating reality. We help businesses move from intent to execution, setting up structures that scale, negotiating relationships that last, and mapping the legal foundations that support growth. Whether it's a franchise expanding across cities, a brand securing its licensing model, a company entering a new market, or a real estate transaction shaping the next phase of operations, we bring clarity to every moving part.\n\nOur work often begins at the centre of a business relationship: contracts, partnerships, distribution, and commercial strategy. From there, we help clients protect and extend what makes their business valuable, starting from brand identity, intellectual property, and the technology or content that powers their model. We streamline outsourcing arrangements, refine digital and technology-led partnerships, and structure deals that help companies scale responsibly.\n\nEach engagement is built on the same philosophy: practical solutions, commercially aligned decisions, and a deep understanding of how business, brand, and operations interact in a fast-moving market.",
      },
      {
        id: "ipstrategy",
        name: "Technology & Innovation",
        items: [
          "FinTech & Digital Business",
          "Online Content, Platforms & Media",
          "Technology Commercialisation",
          "Emerging Tech & Digital Infrastructure",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Technology-driven businesses grow fast, and the law around them shifts just as quickly. We support innovators from digital platforms to fintech ventures as they build products, expand markets, and commercialise ideas. Our work sits at the intersection of law, technology, and business strategy, helping clients navigate product launches, digital transactions, platform risks, and content-driven ecosystems.\n\nWhether a client is structuring a fintech model, managing data governance, scaling online content operations, or licensing technology across borders, we help convert innovation into workable, compliant business systems. We understand how platforms operate, how digital infrastructure evolves, and how emerging technologies create new regulatory and commercial challenges. Our approach is grounded in practicality: protect the idea, enable the model, and support growth that is both ambitious and responsible.",
      },
      {
        id: "employment",
        name: "Employment & HR Advisory",
        items: [
          "Employment & HR Advisory",
          "Compensation & Workplace Policies",
          "Senior Management Agreements",
          "Cross-border Employment Structuring",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "People decisions shape the rhythm of an organisation. We help leadership teams navigate that responsibility with clarity and confidence from designing workplace policies to structuring leadership contracts and managing sensitive workforce issues. Whether a company is scaling, restructuring, or moving talent across borders, we bring legal precision to decisions that carry cultural and operational impact.\n\nOur work spans everything from day-to-day HR compliance to high-stakes executive agreements, compensation planning, and global mobility. We help organisations set expectations early, avoid disputes before they arise, and stay compliant in a landscape where labour rules evolve quickly. The goal is simple: align people, policy, and performance so the organisation can grow on a stable, human-centred foundation.",
      },
      {
        id: "fintech",
        name: "Transactions & Investment",
        items: [
          "Mergers & Acquisitions",
          "Private Equity & Venture Capital",
          "Banking & Finance",
          "Tax & Structuring",
          "Cross-border Structuring & Assistance",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Transactions are moments of transformation. We help businesses navigate M&A, investments, and financial structures with clarity and strategy, whether they are acquiring, being acquired, raising capital, or entering new markets. Our role is to simplify complexity: distilling negotiation priorities, aligning expectations, and creating transaction structures that stand up to both legal scrutiny and commercial pressure.\n\nFrom private equity deals to cross-border investments and financial arrangements, we guide clients through every stage of the transaction. This includes banking support, tax-efficient structuring, and multi-jurisdictional coordination. Our focus is always on long-term value: ensuring the transaction not only closes smoothly but positions the business for sustainable growth.",
      },
    ],
  },
  {
    id: "regulatory",
    title: "Regulatory & Compliance",
    description:
      "Navigate complex regulatory frameworks with confidence through proactive compliance strategies and expert guidance.",
    subtopics: [
      {
        id: "dataprotection",
        name: "Consumer, Packaging & Product Regulation",
        items: [
          "Packaging, Labelling & Consumer Law",
          "Advertising & Marketing Standards",
          "E-commerce & Marketplace Rules",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Regulation is the framework that keeps markets fair, products safe, and businesses accountable. We guide clients through the complex web of consumer, packaging, and product rules, ensuring that every label, claim, and disclosure meets legal requirements while supporting business objectives.\n\nFrom packaging and labelling to marketing communications and e-commerce platforms, we help companies align with sector-specific standards and mandatory disclosures. Whether it's health claims, ESG assertions, comparative advertising, or online consumer protection, our focus is on compliance that builds trust, mitigates risk, and fosters long-term credibility in the marketplace.",
      },
      {
        id: "datalocalisation",
        name: "Data, Technology & AI Regulation",
        items: [
          "Data Protection & Privacy",
          "AI Governance & Accountability",
          "Data Localisation & Cross-Border Transfers",
          "Platform & Intermediary Regulation",
          "Cybersecurity & Digital Infrastructure",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Data is the lifeblood of modern business, and technology is reshaping the rules of engagement. We help clients navigate the evolving landscape of data protection, AI governance, and platform regulation, ensuring their innovations operate within legal and ethical boundaries.\n\nFrom privacy and cybersecurity to data localisation and cross-border transfers, we provide strategies that protect both business and consumer interests. For AI and digital platforms, we focus on accountability, transparency, and regulatory alignment, helping clients anticipate legal obligations while driving innovation.\n\nOur work balances compliance with operational flexibility, enabling businesses to harness technology confidently, manage risk, and maintain public trust in an increasingly digital world.",
      },
      {
        id: "aigovernance",
        name: "Trade, Competition & Foreign Investment",
        items: [
          "Cross-Border Trade & Customs",
          "Foreign Investment Approvals",
          "Market Access Regulation",
          "Competition & Antitrust",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Entering new markets or expanding globally requires more than ambition. It demands precision, foresight, and compliance. We guide clients through cross-border trade rules, foreign investment approvals, and competition laws to ensure seamless market access and sustainable growth.\n\nFrom navigating complex customs regimes to obtaining regulatory approvals for foreign investment, our role is to anticipate challenges and streamline processes. We also advise on antitrust and competition matters, helping clients compete fairly while safeguarding strategic interests.\n\nOur focus is on creating a regulatory roadmap that aligns with business objectives, mitigates risk, and positions companies to succeed in highly regulated, competitive environments.",
      },
      {
        id: "packaging",
        name: "Sustainability, Policy & Administrative Compliance",
        items: [
          "ESG & Sustainability Governance",
          "Environmental Approvals",
          "Liaison & Regulatory Filings",
          "Policy & Government Advisory",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Sustainability and policy compliance are no longer optional. They are central to business resilience and reputation. We assist clients in meeting ESG obligations, obtaining environmental approvals, and liaising with regulators and government bodies to ensure smooth operations.\n\nFrom sustainability governance to regulatory filings, we help organisations embed compliance into strategy and operations. Our advisory ensures businesses meet current legal standards while anticipating future policy developments, maintaining credibility with stakeholders, and building a foundation for long-term impact.\n\nWe make administrative complexity manageable, translating policy requirements into actionable plans that support sustainable growth and regulatory confidence.",
      },
    ],
  },
  {
    id: "disputes",
    title: "Disputes",
    description:
      "Comprehensive dispute resolution services combining litigation expertise with strategic settlement approaches.",
    subtopics: [
      {
        id: "trademark",
        name: "Litigation & Regulatory Enforcement",
        items: [
          "Civil & Commercial Litigation",
          "Writs, Injunctions & Urgent Relief",
          "Regulatory Investigations & Notices",
          "Compliance Breach Enforcement",
          "Digital Platform & Marketplace Enforcement",
          "Court-Mandated Negotiations & Settlements",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Disputes are moments that test both strategy and resilience. We guide clients through civil and commercial litigation, regulatory investigations, and enforcement actions, ensuring that their position is protected and their objectives advanced.\n\nWhether seeking urgent relief, managing compliance breaches, or navigating court-mandated settlements, we combine legal acumen with practical insight. Our work extends to digital platforms and marketplaces, helping clients enforce rights and mitigate reputational or financial risk. We simplify complexity, providing clarity and direction when stakes are high.",
      },
      {
        id: "crossborder",
        name: "Cross-Border Coordination & Enforcement",
        items: [
          "Multi-Jurisdictional Strategy & Document Coordination",
          "Recognition & Enforcement of Foreign Judgements",
          "Cross-Border Regulatory Interaction",
          "Multi-Country Evidence & Discovery Support",
          "Liaising with Foreign Counsel & Multi-Forum Alignment",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Business disputes often transcend borders, requiring careful coordination and strategic foresight. We assist clients in multi-jurisdictional matters, from recognising and enforcing foreign orders to liaising with overseas regulators and counsel.\n\nOur approach ensures alignment across multiple forums, efficient handling of evidence and discovery, and coherent strategies that respect local requirements while advancing global objectives. By navigating the complexities of cross-border enforcement, we help clients secure outcomes that are legally robust and commercially sound.",
      },
      {
        id: "onlinecontent",
        name: "Arbitration, Mediation and other Forms of Dispute Resolution",
        items: [
          "Domestic ADR",
          "International ADR",
          "Pre-Dispute Strategy & Negotiation Frameworks",
          "Settlement structuring",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "Not all disputes belong in court. We support clients in domestic and international alternative dispute resolution, including arbitration and mediation, offering structured frameworks to resolve conflicts efficiently.\n\nFrom pre-dispute planning and negotiation strategies to settlement structuring, we focus on achieving durable resolutions that preserve business relationships and minimise disruption. Our guidance ensures that ADR is used strategically, providing a controlled, cost-effective, and enforceable path to resolution.",
      },
      {
        id: "banking",
        name: "Digital, Brand & Platform Enforcement",
        items: [
          "Takedowns & Online Enforcement",
          "Content Removal & Intermediary Escalations",
          "Domain Name & Cybersquatting Proceedings",
          "Digital Fraud & Malicious Use Intervention",
        ],
        imageUrl: "/dark.jpeg",
        content:
          "In the digital age, brand protection extends beyond traditional channels. We help clients safeguard their identity, reputation, and commercial interests across online platforms and marketplaces.\n\nOur work covers takedowns, content removal, domain disputes, and intervention against digital fraud, including phishing, impersonation, and counterfeit activity. By engaging with intermediaries, platforms, and enforcement mechanisms, we ensure that rights are defended promptly, strategically, and effectively in the digital sphere.",
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
