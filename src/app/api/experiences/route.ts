import { NextResponse } from "next/server";

// temporary until admin dashboard is finished

export async function GET() {
  const ExperienceData = [
    {
      title: "Jitto",
      role: "Full-Stack Engineer",
      date: "2024 - present",
      badges: ["React", "TypeScript", "AWS", "Bash", "Python"],
      src: "/experiences/JITTO-Logo.jpg",
      info: "Contributed as a full stack engineer through refactoring and development of the Jitto frontend, creating a user-friendly experience for customers. I utilized AWS services, including Lambda, DynamoDB, and API Gateway, to build upon a robust infrastructure that supported an efficient admin portal and an optimized e-commerce platform.",
    },
    {
      title: "Google Developer Student Club",
      role: "Technical Co-Lead",
      date: "2023 - 2024",
      badges: ["React", "ChakraUI", "Express.js"],
      src: "/experiences/GDSC-Logo.jpg",
      info: "Co-led the GDSC technical team in organizing meetings and workshops for Queen's University students. As a technical co-lead, I also directed a team of 5 developers in creating a new club website, leading to a 20% increase in online engagement.",
    },
    {
      title: "QMIND",
      role: "Reinforcement Learning Developer",
      date: "2023 - 2024",
      badges: ["Python", "TensorFlow"],
      src: "/experiences/QMIND-Logo.jpg",
      info: "Developed and implemented a Deep Q-Network (DQN) algorithm, focusing on optimizing strategies to maximize winnings in OpenAI Gymnasium's Blackjack environment. Leveraged Python and Q-Learning algorithms to design, test, and refine neural network architectures.",
    },
  ];

  return NextResponse.json({
    data: ExperienceData,
  });
}
