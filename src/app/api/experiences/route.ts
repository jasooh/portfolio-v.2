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
      info: "<p><strong>Contributed as a full stack engineer through refactoring and development of the Jitto frontend, creating a user-friendly experience for customers.</strong> </p><p></p><p>I utilized the following AWS services:</p><p></p><ul><li><p>Lambda, </p></li><li><p>DynamoDB </p></li><li><p>API Gateway</p></li></ul><p></p><p>to build upon a robust infrastructure that supported an efficient admin portal and an optimized e-commerce platform.</p>",
    },
    {
      title: "Google Developer Student Club",
      role: "Technical Co-Lead",
      date: "2023 - 2024",
      badges: ["React", "ChakraUI", "Express.js"],
      src: "/experiences/GDSC-Logo.jpg",
      info: "<p><strong>Co-led the GDSC technical team in organizing meetings and workshops for Queen's University students. </strong></p><p></p><p>As a technical co-lead, I also directed a team of 5 developers in creating a new club website, leading to a <strong>20% increase</strong> in online engagement.</p><p></p><p>I also organized and supervised technical workshops and seminars, including sessions on <strong>LeetCode</strong>, <strong>GitHub</strong>, and a seminar featuring a Google Software Engineer.</p>",
    },
    {
      title: "QMIND",
      role: "Reinforcement Learning Developer",
      date: "2023 - 2024",
      badges: ["Python", "TensorFlow"],
      src: "/experiences/QMIND-Logo.jpg",
      info: "<p><strong>Developed and implemented a Deep Q-Network (DQN) algorithm</strong>, focusing on optimizing strategies to maximize winnings in OpenAI Gymnasium's Blackjack environment. </p><p></p><p>As a member of the reinforcement learning team, I was able to leverage <strong>Python </strong>and <strong>Q-Learning algorithms</strong> to design, test, and refine neural network architectures.</p>",
    },
  ];

  return NextResponse.json({
    data: ExperienceData,
  });
}
