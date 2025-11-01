"use client";
import ConstellationNetwork from "../components/GraphComponent";
import { useRouter } from "next/navigation";
import SubTopicComp from "../components/SubTopicComp";

import { practiceAreas } from "../subTopicContent";

const PracticeAreaPage = () => {
  const router = useRouter();
  // 1. Add 'id' fields to your data that match the graph node IDs

  const handleNodeClick = (nodeId: string, nodeType: string) => {
    let targetId = nodeId;

    // If it's a subtopic, we need to find its parent topic's ID
    if (nodeType === "subtopic") {
      for (const area of practiceAreas) {
        if (area.subtopics.some((sub) => sub.id === nodeId)) {
          targetId = area.id; // Set the target to the parent's ID
          break;
        }
      }
    }

    // Now, scroll to the target (which is either the topic itself or the subtopic's parent)
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative w-full font-sans">
      {/* Sticky Graph Section */}
      <div className="sticky top-0 w-full h-screen z-0">
        {/* 3. Pass the handler to the component */}
        <ConstellationNetwork onNodeClick={handleNodeClick} />
      </div>

      {/* Content sections that stack on scroll */}
      <div className="relative z-10 w-full">
        {practiceAreas.map((area, index) => {
          const isRedBg = index % 2 === 0;
          const bgColor = isRedBg ? "bg-[#8D1A1B]" : "bg-white";
          const textColor = isRedBg ? "text-white" : "text-[#8D1A1B]";

          return (
            <div
              key={area.id} // Use the new ID as the key
              id={area.id} // 4. Add the ID for scrolling
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
                      // 5. Add a wrapper div with the subtopic ID
                      <div
                        onClick={() => {
                          // Use the file path and the subtopic.id
                          router.push(`/practiceArea/${subtopic.id}`);
                        }}
                        key={subIndex}
                        id={subtopic.id}
                        className="cursor-pointer" // Add this so the hover effect works
                      >
                        <SubTopicComp
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
