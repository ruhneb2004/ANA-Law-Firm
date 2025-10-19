import { use } from "react";
import { blogDetails } from "@/app/blogContent";
import { notFound } from "next/navigation";
import { BlogClientView } from "./BlogClientView";
import { RecentPostCard } from "@/app/components/RecentPostCard"; // Import the new component

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default function BlogPostPage({ params }: PageProps) {
  const { slug } = use(params);

  // --- Data Fetching (on the server) ---
  const post = blogDetails.find((blog) => blog.slug === slug);

  if (!post) {
    notFound();
  }

  // --- Logic for finding recent posts ---
  const recentPosts = blogDetails
    // 1. Exclude the current post from the list
    .filter((p) => p.slug !== slug)
    // 2. Sort the remaining posts by date, newest first
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    // 3. Get the top 2 most recent posts
    .slice(0, 2);

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8">
      {/* The main blog content, rendered by the client component */}
      <BlogClientView post={post} />

      {/* --- ADDED: Recent Blogs Section --- */}
      {recentPosts.length > 0 && (
        <section className="mt-16 pt-8 ">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Recent Posts
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {recentPosts.map((recentPost) => (
              <RecentPostCard key={recentPost.slug} post={recentPost} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
