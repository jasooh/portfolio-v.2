// Section containing experience content. Retrieves content from backend.

import ProjectAccordion from "../media/ProjectAccordion";

const ExperienceSection: React.FC = () => (
  <section>
    {/* Accordion */}
    <ProjectAccordion title="Project #1" role="Technical Co-Lead" date="2024">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
    <ProjectAccordion title="Project #2" role="Technical Co-Lead" date="2024">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
    <ProjectAccordion title="Project #3" role="Technical Co-Lead" date="2024">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae natus,
      voluptates omnis blanditiis, eum deserunt expedita architecto, ad dolore
      aspernatur perferendis. Ab quia officia delectus odit veniam nihil, natus
      iusto.
    </ProjectAccordion>
  </section>
);
ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
