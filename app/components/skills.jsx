import React from "react";
import html from "public/assets/skills/html.png";
import css from "public/assets/skills/css.png";
import javascript from "public/assets/skills/javascript.png";
import bootstrap from "public/assets/skills/bootstrap.png";
import tailwind from "public/assets/skills/tailwind.png";
import react from "public/assets/skills/react.png";
import next from "public/assets/skills/nextjs.png";
import node from "public/assets/skills/node.png";
import github from "public/assets/skills/github.png";
import vite from 'public/assets/skills/vitejs.png'
import Image from "next/image";

const Skills = () => {
  const skills = [
    {
      id: 1,
      title: "React JS",
      src: react,
    },
    {
      id: 2,
      title: "Next JS",
      src: next,
    },
     {
      id: 3,
      title: "Vite JS",
      src: vite,
    },
    {
      id: 4,
      title: "Node JS",
      src: node,
    },
    {
      id: 5,
      title: "Tailwind CSS",
      src: tailwind,
    },
    {
      id: 6,
      title: "Bootstrap 5",
      src: bootstrap,
    },
    {
      id: 7,
      title: "Github",
      src: github,
    },
    {
      id: 8,
      title: "JavaScript",
      src: javascript,
    },
    {
      id: 9,
      title: "CSS3",
      src: css,
    },
    {
      id: 10,
      title: "HTML5",
      src: html,
    },
  ];
  return (
    <>
      <div id="skills" className="w-full lg:h-[700px] bg-indigo-900">
        <div className="max-w-screen-xl mx-auto px-8 py-20 text-center md:text-left">
          <h2 className="text-3xl ms:text-7xl tracking-wider p-10 uppercase text-white font-bold">
            skills
          </h2>
          <div className="grid lg:grid-cols-4 gap-8">
            {skills.map(({ id, title, src }) => (
              <div
                key={id}
                className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-between bg-white p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-black"
              >
                <Image src={src} width="64" height="64" alt={title} />
                <h3 className="font-light">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
