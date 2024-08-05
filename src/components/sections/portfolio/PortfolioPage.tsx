"use client";

// NOTE: ??? Can't use my own utility classes here, otherwise breakpoints don't work on line 14

// Section components
import NameSection from "@/components/sections/portfolio/NameSection";

// Context provider
import { SectionContextProvider } from "@/context/SectionContext";
import PortfolioSectionContainer from "./PortfolioSectionContainer";

const PortfolioPage: React.FC = () => (
  <SectionContextProvider>
    <main className="z-10 page-container pt-20 flex flex-col items-center lg:block lg:px-[5%] xl:px-[10%] 2xl:px-[20%]">
      {/* Name section */}
      <NameSection />

      {/* Content section */}
      <article className="full-parent-fit col-container items-center lg:justify-end lg:row-container">
        <div className="col-container w-3/4 lg:w-1/2 gap-24">
          <PortfolioSectionContainer />
        </div>
      </article>
    </main>
  </SectionContextProvider>
);
NameSection.displayName = "PortfolioPage";

export default PortfolioPage;
