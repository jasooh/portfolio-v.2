// Section containing experience content. Retrieves content from backend.

import ProjectAccordion from "../media/ProjectAccordion";

const ExperienceSection: React.FC = () => (
  <section className="col-container gap-2">
    {/* Accordion */}
    <ProjectAccordion
      title="Jitto"
      role="Full-Stack Engineer"
      date="2024 - present"
      badges={["React", "TypeScript", "AWS", "Bash", "Python"]}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
    <ProjectAccordion
      title="Google Developer Student Club"
      role="Technical Co-Lead"
      date="2023 - 2024"
      badges={["React", "ChakraUI", "Express.js"]}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
    <ProjectAccordion
      title="QMIND"
      role="Reinforcement Learning Developer"
      date="2023 - 2024"
      badges={["Python", "TensorFlow"]}
    >
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
  </section>
);
ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
