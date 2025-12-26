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
    <section id="projects" className="w-full py-20 pb-24 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl tracking-wider uppercase text-indigo-900 font-bold text-center mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          Explore my latest work and creative solutions
        </p>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="grid lg:grid-cols-2 gap-8 items-center"
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            {/* Left: Image/Video */}
            <div className="relative h-64 lg:h-80 rounded-2xl overflow-hidden shadow-2xl group">
              {video ? (
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={img.src}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            {/* Right: Details */}
            <div className="flex flex-col justify-center space-y-6 lg:pl-8">
              <div>
                <span className="inline-block px-4 py-1 bg-indigo-100 text-indigo-900 text-sm font-semibold rounded-full mb-4">
                  Project {currentIndex + 1} of {projects.length}
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">
                  {title}
                </h3>
              </div>

              <p className="text-gray-700 text-lg leading-relaxed">
                {description}
              </p>

              {subdesc && (
                <p className="text-gray-600 leading-relaxed">
                  {subdesc}
                </p>
              )}

              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-900 text-white font-semibold rounded-xl hover:bg-indigo-700 hover:shadow-lg transition-all duration-300 w-max group"
              >
                <span>View Project</span>
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-6 mt-16">
          <button
            onClick={handlePrev}
            className="p-4 bg-white border-2 border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50"
            aria-label="Previous project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? "w-8 bg-indigo-900"
                  : "w-3 bg-gray-300 hover:bg-indigo-400"
                  }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-4 bg-white border-2 border-indigo-900 text-indigo-900 rounded-full hover:bg-indigo-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl disabled:opacity-50"
            aria-label="Next project"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsLayout;
