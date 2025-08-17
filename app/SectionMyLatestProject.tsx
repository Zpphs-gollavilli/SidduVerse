"use client";

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BsGithub } from 'react-icons/bs';
import { IoMdOpen } from 'react-icons/io';
import { BsInfoCircle } from 'react-icons/bs';
import styles from "./home.module.css";

const tabs = [
  {
    name: 'Project',
    image: '/my_project.png',
    data: [
      {
        slug: 'siddu-s-world',
        title: 'Siddharth-portfolio',
        image: '/my_project.png',
        repositoryUrl: "https://github.com/Zpphs-gollavilli/siddu-s-3D-world",
        demoUrl: "https://siddu-s-3-d-world-n6ld.vercel.app/",
      },
      {
        slug: 'XOXO-game',
        title: 'XOXO Clash',
        image: '/my_project1.png',
        repositoryUrl: "https://github.com/Zpphs-gollavilli/xoxo-clash",
        demoUrl: "https://zpphs-gollavilli.github.io/XOXO-CLASH/",
      },
      {
        slug: 'smash-track',
        title: 'Smash Track',
        image: '/my_project2.png',
        repositoryUrl: "https://github.com/Zpphs-gollavilli/smash-track",
        demoUrl: "https://zpphs-gollavilli.github.io/SmashTrack/",
      },
      {
        slug: 'My school project',
        title: 'Zpphs-gollavilli',
        image: '/my_project3.png',
        repositoryUrl: "https://github.com/Zpphs-gollavilli",
        demoUrl: "https://zpphs-gollavilli.github.io/",
      },
    ]
  },
];

tabs.push({
  name: 'More',
  image: '/my_project.png',
  data: []
});

export default function SectionMyLatestProject() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    if (tab && parseInt(tab) < tabs.length - 1) {
      setActiveTab(parseInt(tab));
    }
  }, [activeTab]);

  return (
    <section ref={ref} className={`safe-x-padding ${styles.sectionDistance}`} aria-label='My Latest Project Section'>
      <div className='text-center'>
        <motion.h2 initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.5 }} className={styles.sectionTitle}>My Latest Project</motion.h2>
        <motion.p initial={{ y: 100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ duration: 0.7 }} className={`${styles.sectionDescription} max-w-[706px] mx-auto`}>
          Take a look at something I&apos;ve worked on, such as real client projects and personal tools.
        </motion.p>
      </div>

      <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {tabs[activeTab].data.map((project, index) => (
          <motion.div
            key={index}
            className='bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200'
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <div className='flex gap-4 text-blue-600'>
                <Link href={project.repositoryUrl} target='_blank'>
                  <BsGithub size={20} title='View Source' />
                </Link>
                <Link href={project.demoUrl} target='_blank'>
                  <IoMdOpen size={20} title='Live Demo' />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
