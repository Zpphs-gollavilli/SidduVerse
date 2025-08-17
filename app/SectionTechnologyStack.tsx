"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import styles from "./home.module.css";

const technologyStack = [
  {
    name: "HTML5",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    officialSite: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS3",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
    officialSite: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "Three.js",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
    officialSite: "https://threejs.org/",
  },
  {
    name: "Javascript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    officialSite: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "React JS",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
    officialSite: "https://reactjs.org/",
  },
  {
    name: "Tailwind CSS",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
    officialSite: "https://tailwindcss.com/",
  },
  {
    name: "Typescript",
    image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
    officialSite: "https://www.typescriptlang.org/",
  }
];

export default function SectionTechnologyStack() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`}>
      <div className='text-center'>
        <motion.h2
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={styles.sectionTitle}
        >
          Technology Stack
        </motion.h2>
        <motion.p
          initial={{ y: 100, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className={`${styles.sectionDescription} max-w-[960px] mx-auto`}
        >
          {"I care deeply about web development, performance, and user experience. That's why I use modern and proven technologies in all my projects."}
        </motion.p>
      </div>

      <div className='flex items-center justify-center mt-12'>
        <div className='flex flex-row gap-[50px] max-w-[864px] flex-wrap justify-center items-center'>
          {technologyStack.map((item, index) => (
            <div key={index} className='relative h-full'>
              <motion.div
                className="flex justify-center items-center w-[100px] h-[100px] transition-all duration-150 ease-in-out"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  className='w-auto h-[100px]'
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.name}
                />
                <Link
                  href={{
                    pathname: item.officialSite,
                    query: {
                      utm_source: 'portfolio',
                      utm_medium: 'campaign',
                      utm_campaign: 'tech-stack'
                    }
                  }}
                  target="_blank"
                  title={`Learn more about ${item.name}`}
                >
                  <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full p-1 text-white transition-all duration-300 bg-opacity-50 opacity-0 gradient-bg hover:opacity-100 rounded-xl">
                    <p className='font-semibold text-center line-clamp-3'>
                      {item.name}
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
