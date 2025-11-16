import Link from "next/link";

interface SubTopicCompProps {
  id: string;
  subTopic: string;
  imageUrl: string;
  items: string[];
  textColor: string;
}

const SubTopicComp = ({
  id,
  subTopic,
  imageUrl,
  items,
  textColor,
}: SubTopicCompProps) => {
  return (
    <Link href={`practiceArea/${id}`} className="cursor-pointer  group">
      <h3
        className={`text-xl md:text-2xl font-light tracking-wide mb-4 ${textColor}`}
      >
        {subTopic}
      </h3>

      <div className="overflow-hidden ">
        <div
          className={`transition-all duration-700 ease-in-out group-hover:h-96 h-96 sm:h-2`}
        >
          <div
            className="w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${imageUrl})` }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div
              className="absolute inset-0 flex flex-col justify-center px-8 md:px-12 
                         opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity 
                         duration-500 ease-in-out"
            >
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="text-white text-base md:text-lg font-light tracking-wide"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SubTopicComp;
