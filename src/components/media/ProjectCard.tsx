// Project card

// Data types
import { ReactNode } from "react";

// Components
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import Image from "next/image";
import { Badge } from "../ui/Badge";

interface ProjectCardProps {
  title: string;
  type: string;
  date: string;
  src: string;
  badges: string[];
  children?: ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  date,
  src,
  badges,
  children,
}) => (
  <Card>
    <CardContent className="p-0 col-container items-center">
      <Image
        src={src}
        layout="fixed"
        className="w-full h-[20rem] object-cover rounded-t-md"
        width={500}
        height={500}
        alt="placeholder"
      />
    </CardContent>
    <CardHeader>
      <CardTitle>
        <h2 className="text-secondary mb-2">{title}</h2>
        <h3 className="text-white mb-1">{type}</h3>
        <h4>{date}</h4>
      </CardTitle>
      <CardDescription>{children}</CardDescription>
    </CardHeader>
    <CardFooter>
      <div className="row-container gap-2 flex-wrap">
        {badges.map((text, index) => (
          <Badge key={index} variant="outline">
            {text}
          </Badge>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default ProjectCard;
