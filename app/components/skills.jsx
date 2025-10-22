"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { id: 1, title: "React JS", src: "/assets/skills/react.png" },
  { id: 2, title: "Next JS", src: "/assets/skills/nextjs.png" },
  { id: 3, title: "Vite JS", src: "/assets/skills/vitejs.png" },
  { id: 4, title: "Node JS", src: "/assets/skills/node.png" },
  { id: 5, title: "Wordpress", src: "/assets/skills/wordpress.png" },
  { id: 6, title: "MongoDB", src: "/assets/skills/mongodb.png" },
  { id: 7, title: "Tailwind CSS", src: "/assets/skills/tailwind.png" },
  { id: 8, title: "Bootstrap 5", src: "/assets/skills/bootstrap.png" },
  { id: 9, title: "Git", src: "/assets/skills/git.png" },
  { id: 10, title: "Github", src: "/assets/skills/github.png" },
  { id: 11, title: "JavaScript", src: "/assets/skills/javascript.png" },
  { id: 12, title: "CSS3", src: "/assets/skills/css.png" },
  { id: 13, title: "HTML5", src: "/assets/skills/html.png" },
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
    <section id="skills" className="w-full bg-indigo-900 py-16 scroll-mt-20">
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
