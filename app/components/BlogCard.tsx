"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { ShareModal } from "./ShareModal";
import Link from "next/link";

import { BlogDetail } from "@/app/blogContent";

type BlogCardProps = {
  blogDetail: BlogDetail;
};

const MoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="1" />
    <circle cx="12" cy="5" r="1" />
    <circle cx="12" cy="19" r="1" />
  </svg>
);

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 14 20 9 15 4" />
    <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
  </svg>
);

export const BlogCard = ({ blogDetail }: BlogCardProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const CHARS_PER_MINUTE = 1200;
  const minutesToRead = blogDetail.body.length / CHARS_PER_MINUTE;
  const readTime = Math.ceil(minutesToRead);
  const displayReadTime = readTime < 1 ? 1 : readTime;
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(new Date(blogDetail.date));

  const openShareModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(false);
    setIsShareModalOpen(true);
  };

  const handleMenuToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Link href={`/blog/${blogDetail.slug}`} className="block">
        <div className="relative w-full min-w-[220px] aspect-square overflow-hidden shadow-lg group">
          <Image
            src={blogDetail.imageUrl}
            alt={blogDetail.title}
            fill
            className="object-cover z-0 transition-transform duration-300 ease-in-out group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black/40 z-10"></div>
          <div className="relative flex flex-col h-full p-6 text-white z-20">
            <div className="flex justify-between items-center text-sm font-light">
              <div className="flex items-center gap-2">
                <span>{formattedDate}</span>
                <span>•</span>
                <span>{displayReadTime} min read</span>
              </div>
              <div className="relative" ref={menuRef}>
                <button
                  onClick={handleMenuToggle}
                  className="p-1 rounded-full hover:bg-black/20 transition-colors"
                  aria-label="More options"
                >
                  <MoreIcon />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-30">
                    <button
                      onClick={openShareModal}
                      className="w-full flex items-center gap-3 text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      <ShareIcon />
                      <span>Share Post</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            <div className="grow"></div>
            <div>
              <div className="mb-2 inline-block bg-teal-600 px-3 py-1 text-xs font-semibold">
                {blogDetail.category}
              </div>
              <h2 className="text-2xl lg:text-2xl font-extralight">
                {blogDetail.title}
              </h2>
            </div>
          </div>
        </div>
      </Link>

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        blogUrl={`${
          typeof window !== "undefined" ? window.location.origin : ""
        }/blog/${blogDetail.slug}`}
        blogTitle={blogDetail.title}
      />
    </>
  );
};
