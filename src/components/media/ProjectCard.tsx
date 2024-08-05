// Project card

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
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  type,
  date,
  src,
  badges,
}) => (
  <Card>
    <CardContent className="p-0 col-container items-center">
      <Image
        src={src}
        className="w-full object-cover rounded-t-md"
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
      <CardDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea at ab ipsam
        officia veritatis, quidem dignissimos animi maiores, atque quo amet odio
        adipisci beatae, totam accusantium exercitationem est! Corrupti, magni!
      </CardDescription>
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
