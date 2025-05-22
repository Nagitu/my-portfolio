import { NavBar } from "./components/navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
    </>
  );
}
