"use client";

// Section components
import NameSection from "@/components/sections/portfolio/NameSection";
import SummarySection from "@/components/sections/portfolio/SummarySection";
import ExperienceSection from "@/components/sections/portfolio/ExperienceSection";
import ProjectSection from "@/components/sections/portfolio/ProjectSection";
import ContactSection from "@/components/sections/portfolio/ContactSection";

// Context provider
import { SectionContextProvider } from "@/context/SectionContext";

const PortfolioPage: React.FC = () => (
  <SectionContextProvider>
    <main className="page-container px-[20%] pt-20">
      {/* Name section */}
      <NameSection />

      {/* Content section */}
      <article className="full-parent-fit row-container justify-end">
        <div className="col-container w-1/2 gap-24">
          <SummarySection />
          <ExperienceSection />
          <ProjectSection />
          <ContactSection />
        </div>
      </article>
    </main>
  </SectionContextProvider>
);
NameSection.displayName = "PortfolioPage";

export default PortfolioPage;
