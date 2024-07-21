// CSS
import "../styling/constants.css";

// Section components
import NameSection from "@/components/sections/NameSection";
import SummarySection from "@/components/sections/SummarySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="page-container px-96 pt-20">
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
  );
}
