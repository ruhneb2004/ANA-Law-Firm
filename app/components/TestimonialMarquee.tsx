"use client";

import { cn } from "@/lib/utils";
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const reviews = [
  {
    name: "",
    body: "Very responsive and client-focused.",
    img: "/chamber-logo-2018.png",
  },
  {
    name: "",
    body: "Anoop Narayanan of ANA Law Group brings to the table more than two decades of experience handling an array of labour and employment law issues. He is well versed in matters pertaining to permanency claims and strikes.",
    img: "/chamber_creative_2017.jpg",
  },
  {
    name: "",
    body: "Anoop and his team are remarkable for their practical, business-friendly advice",
    img: "/chamber_creative_2017.jpg",
  },
  {
    name: "",
    body: `Anoop Narayanan of ANA Law Group is a "solid attorney who has a great deal of experience in the trade mark area“`,
    img: "/chamber_creative_2017.jpg",
  },
  {
    name: "",
    body: `Anoop Narayanan of ANA Law Group is "a diligent lawyer who is very good in employment." `,
    img: "/2016.png",
  },
  {
    name: "",
    body: `Anoop Narayanan is praised for being "extremely reliable and responsive" and "very focused on the clients' needs." Sources are particularly impressed by his litigation skills, noting that he has a "real gravitas to his character." `,
    img: "/chamber-creative 2014.jpg",
  },
  {
    name: "",
    body: `Anoop Narayanan of ANA Law Group is an "exceptionally smart lawyer" who is "business-focused and solutions-oriented." `,
    img: "/2015.jpg",
  },
  {
    name: "",
    body: ` Anoop was a pleasure to work with. He was responsive and timely, took the time to understand the facts and the scope of the project and followed up to ensure that the advice he provided was what we were looking for. `,
    img: "/chamber-logo-2019.png",
  },
  {
    name: "",
    body: `An excellent communicator with a "very strong background in technology."`,
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
        "relative flex h-40 w-full cursor-pointer overflow-hidden rounded-xl border p-0",
        "border-gray-950/10 bg-gray-950/1 hover:bg-gray-950/5",
        "dark:border-gray-50/10 dark:bg-gray-50/10 dark:hover:bg-gray-50/15"
      )}
    >
      <div className="relative w-1/3 h-40 min-w-[80px] max-w-[100px] sm:min-w-[120px] sm:max-w-[100px] shrink-0 overflow-hidden rounded-l-xl">
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
