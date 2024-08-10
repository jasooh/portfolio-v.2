"use client";

// Section containing project content. Receives content from backend.

// Data types
import { ProjectProps, ResultProps } from "@/app/types/request";

// Hooks
import { useEffect, useState } from "react";

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import ProjectCard from "../../media/ProjectCard";

// shadcn/ui & embla carousel
import Autoplay from "embla-carousel-autoplay";

const ProjectSection: React.FC = () => {
  // Fetch project data
  const [projectData, setProjectData] = useState<ProjectProps[]>();
  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch("/api/projects", {
        headers: {
          Accept: "application/json",
          method: "GET",
        },
      });
      if (response) {
        const result: ResultProps = await response.json();
        const formattedData: ProjectProps[] = result["data"] as ProjectProps[];
        setProjectData(formattedData);
      }
    } catch (error) {
      console.error("ERROR:", error);
    } finally {
      console.log("DEBUG: Finished loading project data!");
    }
  };

  // Fetch data after rendering
  useEffect(() => {
    fetchDataFromAPI();
  }, []);

  return (
    <section
      id="2"
      className="project section-container row-container justify-center"
    >
      {projectData ? (
        <Carousel
          className="w-full max-w-md"
          opts={{ loop: true }}
          plugins={[Autoplay({ delay: 5000 })]}
        >
          <CarouselContent>
            {projectData.map((project, index) => (
              <CarouselItem key={index}>
                <ProjectCard
                  title={project.title}
                  type={project.type}
                  date={project.date}
                  src={project.src}
                  badges={project.badges}
                >
                  {project.info}
                </ProjectCard>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      ) : (
        <></>
      )}
    </section>
  );
};
ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
