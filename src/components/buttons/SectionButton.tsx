// Button component for the hero section.

// Class name merger
import { cn } from "@/lib/utils";

// Components
import { VscChevronRight } from "react-icons/vsc";

interface SectionButtonProps {
  className?: string;
  text: string;
}

const SectionButton: React.FC<SectionButtonProps> = ({ text, className }) => (
  <button className={(cn("group row-container items-center w-2/3", className))}>
    <VscChevronRight className="group-hover:translate-x-1 duration-300" />
    <div className="group-hover:text-secondary group-hover:translate-x-2 group-hover:font-bold duration-300">
      {text}
    </div>
  </button>
);

export default SectionButton;
