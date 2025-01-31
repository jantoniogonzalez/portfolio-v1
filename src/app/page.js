'use client'
import About from "@/components/About";
import BlendCursor from "@/components/BlendCursor";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import WorkAbout from "@/components/WorkAbout";
import Header from "@/components/header/Header";
import SectionSubtitle from "@/components/subtitles/SectionSubtitle";
import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  const [isTitleHovered, setIsTitleHovered] = useState(false);
  const [isSubtitleHovered, setIsSubtitleHovered] = useState(false);

  return (
    <main className="bg-[#222222] ">
      <BlendCursor isTitleHovered={isTitleHovered} isSubtitleHovered={isSubtitleHovered} />
      <Header setIsSubtitleHovered={setIsSubtitleHovered} setIsTitleHovered={setIsTitleHovered} />
      <Hero id="hero" setIsSubtitleHovered={setIsSubtitleHovered} setIsTitleHovered={setIsTitleHovered}/>
      <WorkAbout id="experience" setIsSubtitleHovered={setIsSubtitleHovered} setIsTitleHovered={setIsTitleHovered}/>
      <Projects id="projects" setIsSubtitleHovered={setIsSubtitleHovered} setIsTitleHovered={setIsTitleHovered}/>
      <About id="about" setIsSubtitleHovered={setIsSubtitleHovered} setIsTitleHovered={setIsTitleHovered}/>
    </main>
  );
}
