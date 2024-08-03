"use client";

// Section containing project content. Receives content from backend.

// Components
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/Carousel";
import ProjectCard from "../media/ProjectCard";

// shadcn/ui & embla carousel
import Autoplay from "embla-carousel-autoplay";

// Test data
const info = [
  {
    title: "Black Magic II",
    role: "Class Developer",
    date: "2019 - 2022",
    badges: ["Lua", "Blender", "Roblox Studio"],
    src: "/placeholder.jpg",
  },
  {
    title: "Path Pilot",
    role: "Lead Programmer",
    date: "2023",
    badges: ["Express.js", "Twilio", "Google Cloud"],
    src: "/placeholder.jpg",
  },
  {
    title: "J-Skate",
    role: "Developer",
    date: "2024",
    badges: ["React", "TypeScript", "AWS"],
    src: "/placeholder.jpg",
  },
  {
    title: "React Bacterial Simulator",
    role: "Lead Programmer",
    date: "2024",
    badges: ["React", "TypeScript", "Tailwind"],
    src: "/placeholder.jpg",
  },
];

const ProjectSection: React.FC = () => (
  <section className="section-container row-container justify-center">
    <Carousel className="w-full max-w-md" plugins={[Autoplay({ delay: 5000 })]}>
      <CarouselContent>
        {info.map((project, index) => (
          <CarouselItem key={index}>
            <ProjectCard
              title={project.title}
              role={project.role}
              date={project.date}
              src={project.src}
              badges={project.badges}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);
ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
