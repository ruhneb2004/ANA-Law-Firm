import { PracticeArea } from "../subTopicContent";
import SubTopicComp from "./SubTopicComp";

export const TopicComp = ({
  area,
  bgColor,
  textColor,
  isRedBg,
}: {
  area: PracticeArea;
  bgColor: string;
  textColor: string;
  isRedBg: boolean;
}) => (
  <div
    key={area.id}
    id={area.id}
    className={`sticky top-0 h-screen ${bgColor} ${textColor}`}
  >
    <div className="h-full overflow-y-auto">
      <div className="w-full px-20 lg:px-6 py-16">
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
