// Section containing experience content. Retrieves content from backend.

import ExperienceAccordion from "../media/ExperienceAccordion";

const info = [
  {
    title: "Jitto",
    role: "Full-Stack Engineer",
    date: "2024 - present",
    badges: ["React", "TypeScript", "AWS", "Bash", "Python"],
  },
  {
    title: "Google Developer Student Club",
    role: "Technical Co-Lead",
    date: "2023 - 2024",
    badges: ["React", "ChakraUI", "Express.js"],
  },
  {
    title: "QMIND",
    role: "Reinforcement Learning Developer",
    date: "2023 - 2024",
    badges: ["Python", "TensorFlow"],
  },
];

const ExperienceSection: React.FC = () => (
  <section className="section-container col-container gap-2">
    {/* Accordion */}
    {info.map((experience) => (
      <ExperienceAccordion
        title={experience.title}
        role={experience.role}
        date={experience.date}
        badges={experience.badges}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
        voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
        aspernatur perferendis. Ab quia officia delectus odit veniam nihil,
        natus iusto.
      </ExperienceAccordion>
    ))}
  </section>
);
ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
