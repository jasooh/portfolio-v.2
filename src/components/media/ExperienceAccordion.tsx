// Accordion component for project section, receives data from the backend

// Data types
import { ReactNode } from "react";

interface ProjectAccordionProps {
  title: string;
  role: string;
  date: string;
  badges: string[];
  src: string;
  children?: ReactNode;
}

// Components
import Image from "next/image";
import { Badge } from "../ui/Badge";
import { ChevronDown } from "lucide-react";

// shadcn/ui
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from "../ui/Accordion";

const ProjectAccordion: React.FC<ProjectAccordionProps> = ({
  title,
  role,
  date,
  badges,
  src,
  children,
}) => (
  <Accordion type="single" className="" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>
        {/* Accordion title */}
        <section className="row-container gap-3">
          <Image
            src={src}
            className="w-[8rem] object-cover rounded-md hidden xl:block"
            width={500}
            height={500}
            alt="placeholder"
          />
          <div className="col-container items-start text-left">
            <h2 className="text-secondary tracking-widest">{title}</h2>
            <h3>{role}</h3>
            <h4 className="mb-2">{date}</h4>
            <div className="row-container gap-2 flex-wrap">
              {badges.map((text, index) => (
                <Badge key={index} variant="outline">
                  {text}
                </Badge>
              ))}
            </div>
          </div>
        </section>
        <ChevronDown className="text-secondary h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionTrigger>
      <AccordionContent>{children}</AccordionContent>
    </AccordionItem>
  </Accordion>
);
ProjectAccordion.displayName = "ProjectAccordion";

export default ProjectAccordion;
