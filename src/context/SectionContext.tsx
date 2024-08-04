// Hooks & Data types
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface SectionContextProps {
  currentSection: number;
  setCurrentSection: Dispatch<SetStateAction<number>>;
}

interface SectionProviderProps {
  children: ReactNode;
}

const Section = createContext({} as SectionContextProps);

const SectionContextProvider: React.FC<SectionProviderProps> = ({
  children,
}) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <Section.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </Section.Provider>
  );
};

function useSectionContext() {
  const SectionContext = useContext(Section);
  return SectionContext;
}

export { SectionContextProvider, useSectionContext };
