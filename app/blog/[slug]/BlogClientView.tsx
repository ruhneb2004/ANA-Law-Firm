"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BlogDetail } from "@/app/blogContent";

// --- SVG ICONS (Place all your icon components here) ---
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  </svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const LinkIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72" />
  </svg>
);

export function BlogClientView({ post }: { post: BlogDetail }) {
  const [copied, setCopied] = useState(false);
  // ADD: State to store the full client-side URL
  const [currentUrl, setCurrentUrl] = useState("");

  // ADD: useEffect to capture the URL once the component mounts in the browser
  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []); // Empty array ensures this runs only once on mount

  // Read Time Calculation
  const CHARS_PER_MINUTE = 1200;
  const minutesToRead = post.body.length / CHARS_PER_MINUTE;
  const readTime = Math.ceil(minutesToRead);
  const displayReadTime = readTime < 1 ? 1 : readTime;

  // Handle Copy Link
  const handleCopyLink = () => {
    // CHANGE: Use the state variable for consistency
    if (!currentUrl) return; // Guard against empty URL
    navigator.clipboard.writeText(currentUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <article>
      <header className="mb-8">
        <p className="text-teal-600 font-semibold mb-2">{post.category}</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
          <span>•</span>
          <span>{displayReadTime} min read</span>
        </div>
      </header>

      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose lg:prose-xl max-w-none mb-12">
        <p>{post.body}</p>
      </div>

      <footer className="mt-12 py-6 border-t border-gray-200">
        <div className="flex items-center gap-4">
          {/* CHANGE: All links now use the 'currentUrl' state variable */}
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-600"
          >
            <FacebookIcon />
          </a>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-black"
          >
            <TwitterIcon />
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
              currentUrl
            )}&title=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-900 hover:text-blue-700"
          >
            <LinkedInIcon />
          </a>
          <button
            onClick={handleCopyLink}
            className="text-gray-900 hover:text-black"
          >
            {copied ? (
              <span className="text-green-900 text-xs font-semibold">
                Copied!
              </span>
            ) : (
              <LinkIcon />
            )}
          </button>
        </div>
      </footer>
    </article>
  );
}
