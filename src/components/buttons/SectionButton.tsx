// Button component for the hero section.

// Class name merger
import { cn } from "@/lib/utils";

// Components
import { VscChevronRight } from "react-icons/vsc";

// Context
import { useSectionContext } from "@/context/SectionContext";

interface SectionButtonProps {
  className?: string;
  text: string;
  destinationRef: string;
  section: number;
}

const SectionButton: React.FC<SectionButtonProps> = ({
  className,
  text,
  destinationRef,
  section,
}) => {
  // Define context
  const SectionContext = useSectionContext();
  const current = SectionContext.currentSection;
  const isSelected = current == section;

  // Define onClick callback
  function onSectionClick() {
    document.querySelector(destinationRef)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
    SectionContext.setCurrentSection(section);
  }

  return (
    <button
      className={cn("group row-container items-center w-2/3", className)}
      onClick={onSectionClick}
    >
      <VscChevronRight
        className={`group-hover:translate-x-1 duration-300  ${
          isSelected ? "translate-x-1" : ""
        }`}
      />
      <div
        className={`group-hover:text-secondary group-hover:translate-x-2 group-hover:font-bold duration-300 ${
          isSelected ? "text-secondary translate-x-2 font-bold" : ""
        }`}
      >
        {text}
      </div>
    </button>
  );
};
SectionButton.displayName = "SectionButton";

export default SectionButton;
