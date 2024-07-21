// Data types
import { ReactNode } from "react";

interface RichTextProps {
  children: ReactNode;
  endpoint?: string;
}

// TBC: This component will fetch text from the backend. Replace children with the returned data from the backend.
const RichText: React.FC<RichTextProps> = ({ children }) => <p>{children}</p>;
RichText.displayName = "RichText"

export default RichText;
