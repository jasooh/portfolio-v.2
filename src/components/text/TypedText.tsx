"use client";

// Text component that has a typewriter effect.

// Typewriter
import Typewriter from "typewriter-effect";

interface TypedTextProps {
  className?: string;
  text: string;
  speed: number;
}

const TypedText: React.FC<TypedTextProps> = ({ text, className, speed }) => (
  <div className={className}>
    <Typewriter options={{ strings: text, autoStart: true, delay: speed }} />
  </div>
);

export default TypedText;
