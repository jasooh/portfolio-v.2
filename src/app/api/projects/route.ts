import { NextResponse } from "next/server";

// temporary until admin dashboard is finished

export async function GET() {
  const ProjectData = [
    {
      title: "Black Magic II",
      type: "Game",
      date: "2019",
      badges: ["Lua", "Blender", "Roblox Studio"],
      src: "/projects/BM2-Preview.gif",
      info: "A ROBLOX fighting game I developed alongside an indie development studio. At its peak activity, it had up to 2,000+ active players.",
    },
    {
      title: "Path Pilot",
      type: "Hackathon project",
      date: "2023",
      badges: ["Express.js", "Twilio", "Google Cloud"],
      src: "/projects/PP-Preview.jpg",
      info: "A web application I developed for UTSC's Hack the Valley 8. It placed 28th out of 80 participating teams.",
    },
    {
      title: "React Bacterial Simulator",
      type: "Front-end project",
      date: "2024",
      badges: ["React", "TypeScript", "Tailwind"],
      src: "/projects/J241-Preview.gif",
      info: "A React/TypeScript app created to simulate bacterial growth on a dynamically resizable grid that can simulate up to 10,000+ bacterial cells replicating.",
    },
  ];

  return NextResponse.json({
    data: ProjectData,
  });
}
