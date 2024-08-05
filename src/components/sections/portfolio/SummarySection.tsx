// Section containing summary text. Retrieves summary text from backend.

// Components
import RichText from "../../text/RichText";

const SummarySection: React.FC = () => (
  <section id="0" className="summary observe section-container">
    <RichText>
      <span className="text-secondary">
        In 2015, I wrote my first ever program in Lua using ROBLOX Studio&apos;s
        game engine.{" "}
      </span>
      It was a simple script that teleported the player to another location on
      the map. <br /> <br />
      After programming in Lua for over 5 years, I learned about full-stack
      development and software development. I used these skills to develop
      websites for a start-up, my technical projects, and hackathons. <br />{" "}
      <br />
      Now, as an aspiring Management Engineering student at the University of
      Waterloo, I hope to be at the forefront of this rapidly evolving software
      industry.
    </RichText>
  </section>
);
SummarySection.displayName = "SummarySection";

export default SummarySection;
