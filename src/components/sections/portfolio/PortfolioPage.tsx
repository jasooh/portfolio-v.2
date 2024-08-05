"use client";

// Section components
import NameSection from "@/components/sections/portfolio/NameSection";

// Context provider
import { SectionContextProvider } from "@/context/SectionContext";
import PortfolioSectionContainer from "./PortfolioSectionContainer";

const PortfolioPage: React.FC = () => (
  <SectionContextProvider>
    <main className="page-container px-[20%] pt-20">
      {/* Name section */}
      <NameSection />

      {/* Content section */}
      <article className="full-parent-fit row-container justify-end">
        <div className="col-container w-1/2 gap-24">
          <PortfolioSectionContainer />
        </div>
      </article>
    </main>
  </SectionContextProvider>
);
NameSection.displayName = "PortfolioPage";

export default PortfolioPage;
