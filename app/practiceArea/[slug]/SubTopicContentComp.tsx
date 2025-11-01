import Image from "next/image";

// 1. Define a simpler props interface for the subtopic content
interface SubTopicContentProps {
  title: string;
  imageUrl: string;
  content: string; // Changed from 'body' to 'content' for clarity
}

// 2. Renamed the component and updated its props
export function SubTopicContent({
  title,
  imageUrl,
  content,
}: SubTopicContentProps) {
  // All logic (state, effects, calculations, handlers) has been removed.

  return (
    // 3. Simplified the structure to an article
    <article className="w-full">
      {/* Title is now the main heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      {/* Image remains the same */}
      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority // Keep priority if this is likely above the fold
        />
      </div>

      {/* Content body */}
      <div className="prose lg:prose-xl max-w-none">
        {/* Use dangerouslySetInnerHTML if content is HTML, or just <p> if it's plain text */}
        {/* Assuming plain text for safety: */}
        <p>{content}</p>

        {/* --- OR --- */}
        {/* If your content is saved as HTML, use this instead: */}
        {/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
      </div>

      {/* 4. Removed the entire <footer> and sharing section */}
    </article>
  );
}
