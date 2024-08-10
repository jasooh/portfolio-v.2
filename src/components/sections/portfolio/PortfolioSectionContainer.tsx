// Component containing the observation observer and section components.

// Section components
import SummarySection from "@/components/sections/portfolio/SummarySection";
import ExperienceSection from "@/components/sections/portfolio/ExperienceSection";
import ProjectSection from "@/components/sections/portfolio/ProjectSection";
import ContactSection from "@/components/sections/portfolio/ContactSection";

// Hooks
import { useEffect } from "react";

// Context
import { useSectionContext } from "@/context/SectionContext";

const PortfolioSectionContainer: React.FC = () => {
  // Define context
  const SectionContext = useSectionContext();

  // Intersection observer
  useEffect(() => {
    const observerSettings = { root: null, rootMargin: "0px", threshold: 1 };
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          SectionContext.setCurrentSection(Number(entry.target.id));
        }
      });
    };
    const observer = new IntersectionObserver(
      observerCallback,
      observerSettings
    );

    const elements = document.querySelectorAll(".observe");
    elements.forEach((element) => observer.observe(element));
  }, [SectionContext]);

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
