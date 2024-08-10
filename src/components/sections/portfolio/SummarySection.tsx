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
      It was a simple script that teleported the player to another location in
      the game. <br /> <br />
      After programming in Lua for over 5 years, I learned about full-stack
      development and software development. I used these skills to develop
      websites for a start-up, my technical projects, and hackathons. <br />{" "}
      <br />
      Now, as an aspiring software engineer who is a student at the University
      of Waterloo, I hope to contribute to society through the code I write and
      being shaped by a network of like-minded individuals motivated to make a
      difference as much as I am.
      <br />
      <br />
      When I&apos;m not behind Visual Studio for hours at a time, I love to play
      volleyball and annoy my cat.
    </RichText>
  </section>
);
SummarySection.displayName = "SummarySection";

export default SummarySection;
