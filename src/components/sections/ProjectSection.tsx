// Section containing project content. Receives content from backend.

import ProjectCarousel from "../media/ProjectCarousel";

const ProjectSection: React.FC = () => (
  <section className="section-container row-container justify-center">
    <ProjectCarousel />
  </section>
);
ProjectSection.displayName = "ProjectSection";

export default ProjectSection;
