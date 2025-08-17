"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";

// Local section components
import SectionHero from "./SectionHero";
import SectionLetsConnect from "./SectionLetsConnect";
import SectionMyLatestProjects from "./SectionMyLatestProject";
import SectionQuote from "./SectionQuote";
import SectionTechnology from "./SectionTechnologyStack";

const projects = [
  {
    slug: "siddu-s-world",
    title: "Siddharth-portfolio",
    image: "/my_project.png",
    repositoryUrl: "https://github.com/Zpphs-gollavilli/siddu-s-world",
    demoUrl: "https://siddu-s-world.com",
  },
  {
    slug: "Badminton-tracker",
    title: "Smashtrack",
    image: "/my_project1.png",
    repositoryUrl: "https://github.com/Zpphs-gollavilli/smashtrack",
    demoUrl: "https://zpphs-gollavilli.github.io/SmashTrack/",
  },
  {
    slug: "XOXO-game",
    title: "XOXO Clash",
    image: "/my_project2.png",
    repositoryUrl: "https://github.com/Zpphs-gollavilli/xoxo-clash",
    demoUrl: "https://zpphs-gollavilli.github.io/XOXO-CLASH/",
  },
  {
    slug: "My school project",
    title: "Zpphs-gollavilli",
    image: "/my_project3.png",
    repositoryUrl: "https://github.com/Zpphs-gollavilli",
    demoUrl: "https://zpphs-gollavilli.github.io/",
  },
];

export default function Home() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <>
      {/* Other Sections */}
      <SectionHero />
      <SectionMyLatestProjects />
      <SectionTechnology />
      <SectionLetsConnect />
      <SectionQuote />
      {/* Removed Projects Section */}
    </>
  );
}
      
