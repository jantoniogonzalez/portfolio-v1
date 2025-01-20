import Hero from "@/components/Hero";
import TransitionText from "@/components/TransitionText";
import WorkAbout from "@/components/WorkAbout";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero/>
      <TransitionText/>
      <WorkAbout/>
    </main>
  );
}
