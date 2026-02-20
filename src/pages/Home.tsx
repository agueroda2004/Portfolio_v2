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
      <AboutMe />
      <TopProjects />
      <Stack />
      <Contact />
    </div>
  );
}
