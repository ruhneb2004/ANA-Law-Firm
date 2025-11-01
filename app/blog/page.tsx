import Image from "next/image";
import { blogDetails, tagList } from "../blogContent"; // Or your central data file
import { FilteredBlogList } from "../components/FilteredBlogList"; // Import the new client component

// This is a Server Component again (no "use client")
const BlogPage = () => {
  return (
    <div>
      {/* THE STICKY HEADER SECTION (Stays here, rendered on the server) */}
      <div className="sticky top-0 z-10 flex flex-col justify-center items-center gap-8 pt-16 md:pt-24 bg-white">
        <div className="text-4xl md:text-6xl font-light text-[#8D1A1B] tracking-wide">
          THE ANA GAZETTE
        </div>
        <div className="w-[80%]">
          <Image
            alt="blog header"
            src={"/blogHeader.avif"}
            width={1200}
            height={400}
            className="w-full h-auto"
          />
        </div>
      </div>

      {/* THE SCROLLING CONTENT WRAPPER */}
      <div className="relative z-20 bg-white pt-20">
        {/* Render the interactive client component, passing all posts and tags as props */}
        <FilteredBlogList posts={blogDetails} tags={tagList} />

        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default BlogPage;
