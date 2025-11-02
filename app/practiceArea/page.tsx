import ConstellationNetwork from "../components/GraphComponent";

import SubTopicComp from "../components/SubTopicComp";

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
            <div
              key={area.id}
              id={area.id}
              className={`sticky top-0 h-screen ${bgColor} ${textColor}`}
            >
              <div className="h-full overflow-y-auto">
                <div className="w-full px-6 py-16">
                  <div className="mb-16">
                    <h2 className="text-4xl md:text-6xl font-light text-center mb-6 tracking-wide">
                      {area.title}
                    </h2>
                    <p
                      className={`text-md leading-relaxed max-w-4xl mx-auto text-center ${
                        isRedBg ? "text-white/90" : "text-gray-700"
                      }`}
                    >
                      {area.description}
                    </p>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20 w-full max-w-5xl mx-auto pb-20">
                    {area.subtopics.map((subtopic, subIndex) => (
                      <div
                        // onClick={() => {
                        //   router.push(`/practiceArea/${subtopic.id}`);
                        // }}
                        key={subIndex}
                        id={subtopic.id}
                        className="cursor-pointer"
                      >
                        <SubTopicComp
                          id={subtopic.id}
                          subTopic={subtopic.name}
                          imageUrl={subtopic.imageUrl}
                          items={subtopic.items}
                          textColor={textColor}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PracticeAreaPage;
