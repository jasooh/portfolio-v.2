// CSS
import "../styling/constants.css";

// Page component
import PortfolioPage from "@/components/sections/portfolio/PortfolioPage";

// Background effect
import BackgroundEffect from "@/components/three/BackgroundEffect";

export default function Home() {
  return (
    <>
      <BackgroundEffect />
      <PortfolioPage />
    </>
  );
}
