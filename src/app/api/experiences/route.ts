import { NextResponse } from "next/server";

export async function GET() {
  const ExperienceData = [
    {
      title: "Jitto",
      role: "Full-Stack Engineer",
      date: "2024 - present",
      badges: ["React", "TypeScript", "AWS", "Bash", "Python"],
      src: "/placeholder.jpg",
    },
    {
      title: "Google Developer Student Club",
      role: "Technical Co-Lead",
      date: "2023 - 2024",
      badges: ["React", "ChakraUI", "Express.js"],
      src: "/placeholder.jpg",
    },
    {
      title: "QMIND",
      role: "Reinforcement Learning Developer",
      date: "2023 - 2024",
      badges: ["Python", "TensorFlow"],
      src: "/placeholder.jpg",
    },
  ];

  return NextResponse.json({
    data: ExperienceData,
  });
}
