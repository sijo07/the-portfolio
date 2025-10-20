"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import html from "public/assets/skills/html.png";
import css from "public/assets/skills/css.png";
import javascript from "public/assets/skills/javascript.png";
import bootstrap from "public/assets/skills/bootstrap.png";
import tailwind from "public/assets/skills/tailwind.png";
import react from "public/assets/skills/react.png";
import next from "public/assets/skills/nextjs.png";
import node from "public/assets/skills/node.png";
import github from "public/assets/skills/github.png";
import vite from "public/assets/skills/vitejs.png";
import wordpress from "public/assets/skills/wordpress.png";
import mongodb from "public/assets/skills/mongodb.png"; 
import git from "public/assets/skills/git.png"; 

const skills = [
  { id: 1, title: "React JS", src: react },
  { id: 2, title: "Next JS", src: next },
  { id: 3, title: "Vite JS", src: vite },
  { id: 4, title: "Node JS", src: node },
  { id: 5, title: "Wordpress", src: wordpress },
  { id: 6, title: "MongoDB", src: mongodb },
  { id: 7, title: "Tailwind CSS", src: tailwind },
  { id: 8, title: "Bootstrap 5", src: bootstrap },
  { id: 9, title: "Git", src: git },
  { id: 10, title: "Github", src: github },
  { id: 11, title: "JavaScript", src: javascript },
  { id: 12, title: "CSS3", src: css },
  { id: 13, title: "HTML5", src: html },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } },
};

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-indigo-900 py-16 scroll-mt-20 ">
      <div className="max-w-screen-xl mx-auto px-6 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-white font-bold mb-12">
          Skills
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {skills.map(({ id, title, src }) => (
            <motion.div
              key={id}
              className="flex flex-col items-center justify-center bg-white p-2 rounded-xl shadow-md cursor-pointer hover:scale-105 hover:shadow-indigo-500/50 transition-transform duration-300"
              variants={cardVariants}
              whileHover={{ scale: 1.08 }}
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Image src={src} width={48} height={48} alt={title} />
              </div>
              <h3 className="mt-2 text-indigo-900 font-medium text-sm">
                {title}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
