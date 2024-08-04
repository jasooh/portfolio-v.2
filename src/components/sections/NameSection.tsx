// Section containing the name and section buttons.

// Components
import SectionButton from "../buttons/SectionButton";
import TypedText from "../text/TypedText";
import IconButton from "../buttons/IconButton";
import { Button } from "../ui/Button";

// Icon components
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";

// Typewriter info
const words = [
  "i like to code stuff and build things for the internet.",
  "developing skills to become a software engineer - one co-op at a time.",
  "working towards making my own a.i army.",
  "i check my email often :)",
];

const NameSection: React.FC = () => (
  <header className="fixed h-[80%] col-container gap-10 justify-between">
    <article>
      {/* Hero section */}
      <section>
        {/* Name */}
        <p>
          <span className="text-secondary">Hey</span>, I'm
        </p>
        <h1 className="text-stroke mb-2">
          JUSTIN <br /> ABUYUAN
        </h1>
        <h2 className="mb-5">
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
    </article>

    {/* Link section */}
    <nav className="row-container justify-between">
      <section className="row-container gap-3">
        <IconButton
          icon={<FaGithub className="size-8" />}
          src="https://github.com/jasooh"
        />
        <IconButton
          icon={<FaLinkedin className="size-8" />}
          src="https://www.linkedin.com/in/justin-abuyuan/"
        />
        <IconButton
          icon={<SiLeetcode className="size-8" />}
          src="https://leetcode.com/u/jasooh/"
        />
      </section>
      {/* TODO: Link to S3 bucket */}
      <Button variant="outline" className="row-container gap-1">
        <IoIosDocument className="size-5" />
        Resume
      </Button>
    </nav>
  </header>
);
NameSection.displayName = "NameSection";

export default NameSection;
