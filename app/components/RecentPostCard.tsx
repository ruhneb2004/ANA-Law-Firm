import Link from "next/link";
import Image from "next/image";
import { BlogDetail } from "@/app/blogContent";

export const RecentPostCard = ({ post }: { post: BlogDetail }) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative overflow-hidden rounded-lg mb-4 w-full h-0 pb-[62.5%]">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>
      <div>
        <p className="text-teal-600 text-sm font-semibold mb-1">
          {post.category}
        </p>
        <h3 className="text-lg font-bold text-gray-800 group-hover:text-[#8D1A1B] transition-colors">
          {post.title}
        </h3>
      </div>
    </Link>
  );
};
