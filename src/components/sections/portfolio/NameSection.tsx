"use client";

// Section containing the name and section buttons.

// Components
import SectionButton from "../../buttons/SectionButton";
import TypedText from "../../text/TypedText";
import IconButton from "../../buttons/IconButton";
import { Button } from "../../ui/Button";

// Icon components
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { IoIosDocument } from "react-icons/io";

// Hooks
import { useRouter } from "next/navigation";

// Context
import { useSectionContext } from "@/context/SectionContext";

// Typewriter info
const words = [
  "i like to code stuff and build things for the internet.",
  "developing skills to become a software engineer - one co-op at a time.",
  "working towards making my own a.i army.",
  "i check my email often :)",
];

const NameSection: React.FC = () => {
  // Routing
  const router = useRouter();
  // Define context
  const SectionContext = useSectionContext();
  const current = SectionContext.currentSection;

  return (
    <header className="z-10 block lg:fixed h-[80%] w-3/4 lg:w-auto mb-20 col-container gap-10 justify-between">
      <article>
        {/* Hero section */}
        <section>
          {/* Name */}
          <p>
            <span className="text-secondary">Hey</span>, I&apos;m
          </p>
          <h1 className="text-stroke mb-2 text-5xl lg:text-7xl">
            JUSTIN <br /> ABUYUAN
          </h1>
          <h2 className="mb-5">
            An Engineering Student @ the{" "}
            <span className="text-secondary">University of Waterloo</span>
          </h2>
        </section>

        {/* Typed text */}
        <section className="h-[3rem] mb-10">
          <TypedText
            text={words[current]}
            className="fit-parent max-w-[25rem] text-secondary"
            speed={10}
          />
        </section>

        {/* Button section */}
        <nav className="w-3/4 col-container align-right items-start gap-1">
          <SectionButton text="SUMMARY" destinationRef=".summary" section={0} />
          <SectionButton
            text="EXPERIENCE"
            destinationRef=".experience"
            section={1}
          />
          <SectionButton
            text="PROJECTS"
            destinationRef=".project"
            section={2}
          />
          <SectionButton text="CONTACT" destinationRef=".contact" section={3} />
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
          {/* <IconButton
            icon={<SiLeetcode className="size-8" />}
            src="https://leetcode.com/u/jasooh/"
          /> */}
        </section>
        {/* TODO: Link to S3 bucket */}
        <Button
          variant="outline"
          className="row-container gap-1"
          onClick={() => router.push("/documents/resume.pdf")}
        >
          <IoIosDocument className="size-5" />
          Résumé
        </Button>
      </nav>
    </header>
  );
};
NameSection.displayName = "NameSection";

export default NameSection;
