import About from "@/components/About";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkAbout from "@/components/WorkAbout";
import Header from "@/components/header/Header";
import SectionSubtitle from "@/components/subtitles/SectionSubtitle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-[#222222]">
      <Header />
      <Hero id="hero"/>
      <WorkAbout id="experience"/>
      <Projects id="projects"/>
      <About id="about"/>
    </main>
  );
}
