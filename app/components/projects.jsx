"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Import your images
import fashionapp from "/public/assets/textures/project/fashionapp.jpg";
import game from "/public/assets/textures/project/game.png";

const projects = [
  {
    id: 1,
    title: "The Fashion App",
    img: fashionapp,
    video: "/assets/textures/project/project1.mp4",
    link: "https://the-fashionisto.vercel.app/",
  },
  {
    id: 2,
    title: "The Game App",
    img: game,
    video: "/assets/textures/project/project2.mp4",
    link: "https://xo-games.vercel.app/",
  },
  {
    id: 3,
    title: "Another Project",
    img: fashionapp,
    video: "/assets/textures/project/project3.mp4",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="w-full lg:py-24 py-10">
      <h2 className="text-3xl ms:text-7xl tracking-wider uppercase text-indigo-900 font-bold text-center lg:text-start lg:pl-48">
        Projects
      </h2>

      <div className="max-w-screen-xl mx-auto px-8 lg:py-20 py-8 text-center md:text-left">
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map(({ id, title, img, video, link }) => (
            <div
              key={id}
              className="relative shadow-md lg:hover:scale-105 duration-300 rounded-3xl bg-indigo-900 overflow-hidden group"
            >
              {/* Image */}
              <Image
                src={img}
                alt={title}
                className="w-full h-64 object-cover block group-hover:hidden"
              />

              {/* Video */}
              <video
                src={video}
                autoPlay
                loop
                muted
                className="w-full h-64 object-cover hidden group-hover:block"
              />

              <div className="px-4 py-3">
                <h2 className="text-white text-center uppercase font-bold text-xl">
                  {title}
                </h2>
                <div className="text-center py-5">
                  <Link
                    href={link}
                    className="uppercase text-white font-bold underline"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
