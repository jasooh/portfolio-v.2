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
  role: string;
  date: string;
  src: string;
  badges: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  role,
  date,
  src,
  badges,
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea at ab ipsam
        officia veritatis, quidem dignissimos animi maiores, atque quo amet odio
        adipisci beatae, totam accusantium exercitationem est! Corrupti, magni!
      </CardDescription>
    </CardHeader>
    <CardContent className="col-container items-center">
      <Image
        src={src}
        className="w-[15rem] object-cover rounded-md"
        width={500}
        height={500}
        alt="placeholder"
      />
    </CardContent>
    <CardFooter>
      <div className="row-container gap-2">
        {badges.map((text) => (
          <Badge variant="outline">{text}</Badge>
        ))}
      </div>
    </CardFooter>
  </Card>
);

export default ProjectCard;
