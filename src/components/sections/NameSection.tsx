// Section containing the name and section buttons.

// Components
import SectionButton from "../buttons/SectionButton";
import TypedText from "../text/TypedText";

// Typewriter info
const words = [
  "i like to code stuff and build things for the internet.",
  "developing skills to become a software engineer - one co-op at a time.",
  "working towards making my own a.i army.",
  "i check my email often :)",
];

const NameSection: React.FC = () => (
  <header className="fixed fit-self col-container gap-10">
    {/* Name */}
    <section>
      <p>
        <span className="text-secondary">Hey</span>, I'm
      </p>
      <h1 className="text-stroke mb-2">
        JUSTIN <br /> ABUYUAN
      </h1>
      <h2>
        An Engineering Student @ the{" "}
        <span className="text-secondary">University of Waterloo</span>
      </h2>
    </section>

    {/* Typed text */}
    <section className="h-[3rem] mb-5">
      <TypedText text={words[0]} className="text-secondary" speed={10} />
    </section>

    {/* Button section */}
    <nav className="w-3/4 col-container align-right items-start gap-1">
      <SectionButton text="SUMMARY" />
      <SectionButton text="EXPERIENCE" />
      <SectionButton text="PROJECTS" />
      <SectionButton text="CONTACT" />
    </nav>
  </header>
);
NameSection.displayName = "NameSection";

export default NameSection;
