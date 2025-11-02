import { SubTopicContent } from "./SubTopicContentComp";
import { notFound } from "next/navigation";
import { getSubTopicData, getAllSubTopicSlugs } from "@/app/subTopicContent";

export function generateStaticParams() {
  const slugs = getAllSubTopicSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const data = getSubTopicData(params.slug);

  if (!data) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: `${data.name} | ANA Law Group`,
    description: data.content.substring(0, 160),
  };
}

export default function SubTopicPage({ params }: { params: { slug: string } }) {
  const data = getSubTopicData(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <SubTopicContent
          title={data.name}
          imageUrl={data.imageUrl}
          content={data.content}
        />
      </div>
    </div>
  );
}
