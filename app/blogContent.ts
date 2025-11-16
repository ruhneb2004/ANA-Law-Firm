export interface BlogDetail {
  imageUrl: string;
  title: string;
  slug: string;
  category: "Articles" | "Newsletter";
  body: string;
  date: string;
  tags?: string[]; // ADDED: Optional tags property
  link?: string; // ADDED: Optional link property
}

export const tagList = [
  "Technology",
  "Privacy",
  "F&B",
  "IP",
  "Employment",
  "Supply Chain",
  "Trademark",
];

export const blogDetails: BlogDetail[] = [
  {
    imageUrl: "/dark.jpeg",
    title:
      "The 72-Hour Clock: Key Takeaways and Urgent Compliance Mandates under India’s DPDP Act, 2023",
    slug: "welcome-to-the-blog",
    category: "Articles",
    body: "The Digital Personal Data Protection (DPDP) Act, 2023, is not just a regulatory shift; it’s a wholesale transformation of how businesses must handle personal data. With the subsequent notification of the DPDP Rules, 2025, India has established one of the world's most demanding privacy regimes. For any business operating in India, the most urgent mandate—carrying penalties up to ₹250 Crores per breach—revolves around the 72-hour clock for data breach reporting.",
    date: "2025-07-13",
    tags: ["Privacy", "Technology"],
  },
  {
    imageUrl: "/dark.jpeg",
    title:
      "The Supply Chain Tightrope: Navigating the New Digital and Material Requirements of India’s EPR Law",
    slug: "hawaii-club-material",
    category: "Articles",
    body: "This is a sample blog body content that is long enough to properly calculate the read time...",
    date: "2025-07-13",
    tags: ["Supply Chain"],
  },
  {
    imageUrl: "/dark.jpeg",
    title: "Lexology – Trademarks in India, 2025 by ANA Law Group",
    slug: "kungfu-panda-limited",
    category: "Articles",
    body: "This Lexology guide on Trademarks in India (2025) provides a comprehensive legal and procedural overview of the Indian trademark regime. The report details the primary domestic legislation (Trade Marks Act 1999) and India's commitment to international agreements (Paris Convention, Madrid Protocol, Nice Agreement). It thoroughly covers the registration lifecycle, including who can apply, what is registrable (including non-traditional marks like sound and shape marks), and the benefits of registration (e.g., exclusivity and prima facie validity).",
    date: "2025-07-13",
    tags: ["IP", "Trademark"],
    link: "https://www.anaassociates.com/wp-content/uploads/2025/06/1.-Lexology-Trademarks-in-India-2025-by-ANA-Law-Group.pdf",
  },
  {
    imageUrl: "/dark.jpeg",
    title:
      "Chambers – Global Practice Guide: Cybersecurity 2025 by ANA Law Group",
    slug: "mifflin-closed",
    category: "Newsletter",
    body: "This chapter, contributed by ANA Law Group for the Chambers Global Practice Guide on Cybersecurity, details the legal transition in India's data protection framework.  It confirms that the right to privacy is a fundamental right under the Indian Constitution, upheld by the 2017 *Puttaswamy* judgment. The guide outlines the shift from the current primary legislation, the Information Technology Act, 2000 (ITA) and the SPDI Rules, 2011, to the impending Digital Personal Data Protection Act, 2023 (DPDPA) and the Draft DPDP Rules, 2025.",
    date: "2025-07-13",
    tags: ["Fight", "marriage"],
    link: "https://www.anaassociates.com/wp-content/uploads/2025/06/2.-Chambers-Global-Practice-Guide-Cybersecurity-2025-by-ANA-Law-Group.pdf",
  },
  {
    imageUrl: "/dark.jpeg",
    title:
      "Lexology – Pharma & Medical Device Regulation, India 2025 by ANA Law Group",
    slug: "lexo-pharma",
    category: "Newsletter",
    body: "This Chambers Global Practice Guide chapter, authored by ANA Law Group, summarises the regulatory framework for Pharma and Medical Devices in India. It identifies the Drug Controller General of India (DCGI) as the competent authority for market authorization, which is governed by the Drugs and Cosmetics Act 1940 (DCA), the Drugs and Cosmetics Rules 1945 (DCR), and the Medical Devices Rules 2017 (MDR).",
    date: "2025-07-13",
    tags: ["Fight", "marriage"],
    link: "https://www.anaassociates.com/wp-content/uploads/2025/06/3.-Lexology-Pharma-Medical-Device-Regulation-2025-by-ANA-Law-Group.pdf",
  },
];
