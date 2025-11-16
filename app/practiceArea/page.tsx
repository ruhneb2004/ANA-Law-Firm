import ConstellationNetwork from "../components/GraphComponent";

import { TopicComp } from "../components/TopicComp";

import { practiceAreas } from "../subTopicContent";

const PracticeAreaPage = () => {
  return (
    <div className="relative w-full font-sans">
      <div className="sticky top-0 w-full h-screen z-0">
        <ConstellationNetwork />
      </div>

      <div className="relative z-10 w-full">
        {practiceAreas.map((area, index) => {
          const isRedBg = index % 2 === 0;
          const bgColor = isRedBg ? "bg-[#8D1A1B]" : "bg-white";
          const textColor = isRedBg ? "text-white" : "text-[#8D1A1B]";

          return (
            <TopicComp
              key={index}
              area={area}
              bgColor={bgColor}
              textColor={textColor}
              isRedBg={isRedBg}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PracticeAreaPage;
