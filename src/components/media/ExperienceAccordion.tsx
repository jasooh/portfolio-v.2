// Accordion component for project section, receives data from the backend

// Data types
import { ReactNode } from "react";

// shadcn/ui
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/Accordion";

interface ProjectAccordionProps {
  title: string;
  role: string;
  date: string;
  badges: string[];
  src: string;
  children?: ReactNode;
}

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  title,
  role,
  date,
  badges,
  src,
  children,
}) => (
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger
        title={title}
        role={role}
        date={date}
        src={src}
        badges={badges}
      ></AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion>
);
ProjectAccordion.displayName = "ProjectAccordion";

export default ProjectAccordion;
