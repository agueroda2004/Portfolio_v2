import React from "react";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import TopProjects from "../components/Home/TopProjects";
import Stack from "../components/Home/Stack";
import Contact from "../components/Home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="z-10 top-0 sticky">
        <AboutMe />
        <TopProjects />
        <Stack />
        <Contact />
      </div>
    </div>
  );
}
