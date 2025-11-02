import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
});

export function QuoteSection() {
  return (
    <div
      className={`h-screen sticky top-0 flex bg-white items-center justify-center z-30 px-4 xs:px-6 sm:px-8 md:px-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 text-center ${playfair.className} font-medium`}
    >
      <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-medium max-w-4xl mx-auto leading-relaxed px-2">
        Our approach is built on providing thorough and precise guidance, where
        you get a complete solution the first time, every time.
      </p>
    </div>
  );
}
