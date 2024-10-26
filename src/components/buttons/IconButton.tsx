// Icon button component for the hero section.

// Data types
import { ReactNode } from "react";

// Class name merger
import { cn } from "@/lib/utils";

interface SectionButtonProps {
  className?: string;
  icon: ReactNode;
  src: string;
}

const IconButton: React.FC<SectionButtonProps> = ({ className, icon, src }) => (
  <a
    className={cn(
      "opacity-50 hover:text-secondary hover:opacity-100 duration-300 flex items-center",
      className
    )}
    href={src}
    target="_blank"
  >
    {icon}
  </a>
);
IconButton.displayName = "IconButton";

export default IconButton;
