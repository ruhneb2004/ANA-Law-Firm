export interface BlogDetail {
  imageUrl: string;
  title: string;
  slug: string;
  category: "Articles" | "Newsletter";
  body: string;
  date: string;
  tags?: string[]; // ADDED: Optional tags property
}

export const tagList = [
  "food",
  "marriage",
  "Fight",
  "Stay",
  "travel",
  "technology",
  "lifestyle",
  "education",
];

export const blogDetails: BlogDetail[] = [
  {
    imageUrl: "/blog2.jpg",
    title: "Implications of Non-Registration",
    slug: "welcome-to-the-blog",
    category: "Articles",
    body: "This is a sample blog body content that is long enough to properly calculate the read time...",
    date: "2025-07-13",
    tags: ["education", "lifestyle"],
  },
  {
    imageUrl: "/blog1.jpg",
    title: "Things not mentioned",
    slug: "hawaii-club-material",
    category: "Articles",
    body: "This is a sample blog body content that is long enough to properly calculate the read time...",
    date: "2025-07-13",
    tags: ["travel", "lifestyle"],
  },
  {
    imageUrl: "/blog3.jpg",
    title: "Benhur Is Someone",
    slug: "kungfu-panda-limited",
    category: "Articles",
    body: "This is a sample blog body content that is long enough to properly calculate the read time...",
    date: "2025-07-13",
    tags: ["technology", "lifestyle"],
  },
  {
    imageUrl: "/blog4.jpg",
    title: "Dunder Mifflin Closed!",
    slug: "mifflin-closed",
    category: "Newsletter",
    body: "This is a sample blog body content that is long enough to properly calculate the read time...",
    date: "2025-07-13",
    tags: ["Fight", "marriage"],
  },
];
