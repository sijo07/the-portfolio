"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import fashionapp from "/public/assets/textures/project/fashionapp.jpg";
import game from "/public/assets/textures/project/game.png";

const projects = [
  {
    id: 1,
    title: "theFashionisto - Online Fashion Store",
    img: fashionapp,
    video: "/assets/textures/project/project2.mp4",
    description:
      "theFashionisto is a modern e-commerce platform designed to offer a seamless online shopping experience with efficient product management and user engagement.",
    subdesc:
      "Developed using the MERN stack (MongoDB, Express.js, React.js, Node.js) and Vite.js, this platform features secure authentication, a dynamic shopping cart, personalized profiles — all styled with Tailwind CSS for a sleek, responsive design.",
    link: "https://github.com/sijo07/theFashionisto",
  },
  {
    id: 2,
    title: "The Game App",
    img: game,
    video: "/assets/textures/project/project2.mp4",
    description: "An interactive web game built with React and Vite.",
    link: "https://xo-games.vercel.app/",
  },
  {
    id: 3,
    title: "Another Project",
    img: fashionapp,
    video: "/assets/textures/project/project3.mp4",
    description: "A sample project for demo purposes.",
    link: "#",
  },
];

const cardVariants = {
  enter: { opacity: 0, x: 300 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

const ProjectsLayout = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const { title, img, video, description, subdesc, link } =
    projects[currentIndex];

  return (
    <section id="projects" className="w-full lg:py-[6rem] py-12">
      <h2 className="text-3xl md:text-5xl tracking-wider uppercase text-indigo-900 font-bold text-center mb-[6rem]">
        Projects
      </h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8"
          variants={cardVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          {/* Left: Details */}
          <div className="lg:w-1/2 flex flex-col justify-start gap-4">
            <h3 className="text-2xl md:text-3xl font-bold text-indigo-900">
              {title}
            </h3>
            <p className="text-gray-700">{description}</p>
            {subdesc && <p className="text-gray-700">{subdesc}</p>}
            <Link
              href={link}
              className="mt-4 px-6 py-3 bg-indigo-900 text-white rounded hover:bg-indigo-700 transition-colors duration-300 w-max text-center"
            >
              View Code
            </Link>
          </div>

          {/* Right: Video */}
          <div className="lg:w-1/2 relative h-64 lg:h-auto">
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                poster={img.src}
                className="w-full h-full object-cover"
              />
            ) : (
              <Image
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-6 mt-6">
        <button
          onClick={handlePrev}
          className="bg-indigo-900 text-white px-6 py-3 hover:bg-indigo-700 transition-colors duration-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="bg-indigo-900 text-white px-6 py-3 hover:bg-indigo-700 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default ProjectsLayout;
