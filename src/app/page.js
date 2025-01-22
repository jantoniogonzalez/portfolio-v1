import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TransitionText from "@/components/TransitionText";
import WorkAbout from "@/components/WorkAbout";
import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero/>
      <WorkAbout/>
      <Projects/>
      <TransitionText/>
    </main>
  );
}
