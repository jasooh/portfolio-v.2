// Component containing the observation observer and section components.

// Section components
import SummarySection from "@/components/sections/portfolio/SummarySection";
import ExperienceSection from "@/components/sections/portfolio/ExperienceSection";
import ProjectSection from "@/components/sections/portfolio/ProjectSection";
import ContactSection from "@/components/sections/portfolio/ContactSection";

// Hooks
import { useEffect, useState } from "react";

// Context
import { useSectionContext } from "@/context/SectionContext";
import { clamp } from "three/src/math/MathUtils.js";

const PortfolioSectionContainer: React.FC = () => {
  // Define context
  const SectionContext = useSectionContext();

  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = () => {
    const position: number = window.scrollY;
    setScrollPosition(position);

    const totalHeight: number = document.documentElement.scrollHeight;
    const viewportHeight: number = window.innerHeight;

    const scrollPortion: number =
      scrollPosition / (totalHeight - viewportHeight);

    const sectionIndex: number = clamp(Math.floor(scrollPortion * 4), 0, 3);
    SectionContext.setCurrentSection(sectionIndex);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <SummarySection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </>
  );
};
PortfolioSectionContainer.displayName = "PortfolioSectionContainer";

export default PortfolioSectionContainer;
