import { NextResponse } from "next/server";

export async function GET() {
  const ProjectData = [
    {
      title: "Black Magic II",
      type: "Game",
      date: "2019",
      badges: ["Lua", "Blender", "Roblox Studio"],
      src: "/placeholder.jpg",
    },
    {
      title: "Path Pilot",
      type: "Hackathon project",
      date: "2023",
      badges: ["Express.js", "Twilio", "Google Cloud"],
      src: "/placeholder.jpg",
    },
    {
      title: "React Bacterial Simulator",
      type: "Front-end project",
      date: "2024",
      badges: ["React", "TypeScript", "Tailwind"],
      src: "/placeholder.jpg",
    },
  ];

  return NextResponse.json({
    data: ProjectData,
  });
}
