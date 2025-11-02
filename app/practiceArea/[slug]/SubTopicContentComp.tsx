import Image from "next/image";

interface SubTopicContentProps {
  title: string;
  imageUrl: string;
  content: string;
}

export function SubTopicContent({
  title,
  imageUrl,
  content,
}: SubTopicContentProps) {
  return (
    <article className="w-full">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
        {title}
      </h1>

      <div className="relative w-full h-64 md:h-96 mb-8">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      <div className="prose lg:prose-xl max-w-none">
        <p>{content}</p>
      </div>
    </article>
  );
}
