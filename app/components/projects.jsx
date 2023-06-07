import React from "react";
import fashionapp from "public/assets/projects/fashionapp.jpg";
import game from "../../public/assets/projects/game.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const project = [
    {
      id: 1,
      title: "the fashion app",
      src: fashionapp,
      link: "https://the-fashionisto.vercel.app/",
    },
    {
      id: 2,
      title: "the game app",
      src: game,
      link:"https://xo-games.vercel.app/",
    },
  ];
  return (
    <>
      <div id="projects" className="w-full lg:py-24 py-10">
        <h2 className="text-3xl ms:text-7xl tracking-wider uppercase text-indigo-900 font-bold text-center lg:text-start lg:pl-48">
          projects
        </h2>
        <div className="max-w-screen-xl mx-auto px-8 lg:py-20 py-8 text-center md:text-left">
          <div className="grid lg:grid-cols-3 gap-8">
            {project.map(({ id, title, src, link }) => (
              <div
                key={id}
                className="shadow-md lg:hover:scale-105 duration-300 rounded-3xl bg-indigo-900"
              >
                <div>
                  <Image src={src} className="object-cover" alt={title} />
                </div>
                <div className="px-4 py-3">
                  <h2 className="text-white text-center uppercase font-bold text-xl">
                    {title}
                  </h2>
                  <div className="text-center py-5">
                    <button className="uppercase text-white font-bold underline">
                      <Link href={link}>view project</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
