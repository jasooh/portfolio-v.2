// Section containing experience content. Retrieves content from backend.

// Data types
import { ExperienceProps, ResultProps } from "@/app/types/request";

// Hooks
import { useEffect, useState } from "react";

// Components
import ExperienceAccordion from "../../media/ExperienceAccordion";

// Test data

const ExperienceSection: React.FC = () => {
  // Fetch experience data
  const [experienceData, setExperienceData] = useState<ExperienceProps[]>();
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("/api/experiences", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const result: ResultProps = await response.json();
        const formattedData: ExperienceProps[] = result[
          "data"
        ] as ExperienceProps[];
        setExperienceData(formattedData);
      }
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      console.log("DEBUG: Finished loading experience data!");
    }
  };

  // Fetch data after rendering
  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <section
      id="1"
      className="min-h-[30rem] experience observe section-container col-container gap-2"
    >
      {/* Accordion */}
      {/* <ExperienceSkeleton /> */}
      {experienceData ? (
        experienceData.map((experience, index) => (
          <ExperienceAccordion
            key={index}
            title={experience.title}
            role={experience.role}
            date={experience.date}
            badges={experience.badges}
            src={experience.src}
          >
            {experience.info}
          </ExperienceAccordion>
        ))
      ) : (
        <></>
      )}
    </section>
  );
};
ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
