"use client";

import { useState } from "react";
import { BlogCard } from "./BlogCard";
import { BlogDetail } from "../blogContent";

interface FilteredBlogListProps {
  posts: BlogDetail[];
  tags: string[];
}

export const FilteredBlogList = ({ posts, tags }: FilteredBlogListProps) => {
  const [activeFilter, setActiveFilter] = useState<string>("All Posts");

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? "All Posts" : filter);
  };

  const filteredPosts = posts.filter((post) => {
    if (activeFilter === "All Posts") return true;
    if (activeFilter === "Articles" || activeFilter === "Newsletter") {
      return post.category === activeFilter;
    }
    return post.tags?.includes(activeFilter);
  });

  return (
    <div>
      {/* FILTER CONTROLS */}
      <div className="flex flex-col md:flex-row justify-between items-center mx-4 md:mx-12 lg:mx-20">
        <div className="flex gap-4 text-md px-4 font-light mb-8 md:mb-0">
          {["All Posts", "Articles", "Newsletter"].map((category) => (
            <button
              key={category}
              onClick={() => handleFilterClick(category)}
              className={`cursor-pointer transition-colors duration-200 ${
                activeFilter === category
                  ? "text-[#8D1A1B] font-semibold"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex w-full md:w-1/2 flex-wrap justify-center md:justify-end gap-3 px-4 text-md font-light">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleFilterClick(tag)}
              className={`border px-3 py-1 cursor-pointer transition-colors duration-200 ${
                activeFilter === tag
                  ? "bg-[#8D1A1B] text-white border-[#8D1A1B]"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* THE BLOG GRID OR "NO POSTS" MESSAGE */}
      <div className="mx-8 md:mx-12 mt-16 md:mt-24">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            {filteredPosts.map((blog) => (
              <BlogCard key={blog.slug || blog.title} blogDetail={blog} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center min-h-[20rem] text-gray-500 text-center px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mb-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-2xl font-semibold mb-2">No posts found</p>
            <p className="text-lg">
              Try adjusting your filters or check back later!
            </p>
            {activeFilter !== "All Posts" && (
              <button
                onClick={() => handleFilterClick("All Posts")}
                className="mt-6 px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
                type="button"
              >
                Show All Posts
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
