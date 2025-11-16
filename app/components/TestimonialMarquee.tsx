"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "Jack",
    body: "I've never seen anything like this before. It's amazing. I love it. just wow !. I am speechless. Just wow ! and this is super cool and the best thing ever. yep this is some gibberish to fill space.",
    img: "/2015.jpg",
  },
  {
    name: "Jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/chamber_creative_2017.jpg",
  },
  {
    name: "John",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/chamber-creative 2014.jpg",
  },
  {
    name: "Jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/chamber-logo-2018.png",
  },
  {
    name: "Jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/chamber-logo-2019.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const FilmReviewCard = ({
  posterImg,
  reviewText,
  reviewSource,
}: {
  posterImg: string;
  reviewText: string;
  reviewSource?: string;
}) => {
  return (
    <figure
      className={cn(
        "relative flex h-auto w-full cursor-pointer overflow-hidden rounded-xl border p-0",
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="relative w-1/3 h-52 min-w-[80px] max-w-[100px] sm:min-w-[120px] sm:max-w-[160px] shrink-0 overflow-hidden rounded-l-xl">
        <Image
          src={posterImg}
          alt="Film Poster"
          fill
          className="object-center"
          sizes="(max-width: 640px) 100px, 160px"
        />
      </div>

      <div className="flex flex-col justify-between p-2 sm:p-4 flex-wrap max-w-36 sm:max-w-52">
        <blockquote className="text-xs sm:text-sm italic text-gray-700 dark:text-gray-300">
          {reviewText}
        </blockquote>

        {reviewSource && (
          <figcaption className="mt-2 sm:mt-4 text-right text-xs sm:text-sm font-medium text-gray-900 dark:text-white">
            - {reviewSource}
          </figcaption>
        )}
      </div>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <FilmReviewCard
            posterImg={review.img}
            key={index}
            reviewText={review.body}
            reviewSource={review.name}
          />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <FilmReviewCard
            posterImg={review.img}
            key={index}
            reviewText={review.body}
            reviewSource={review.name}
          />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
    </div>
  );
}
