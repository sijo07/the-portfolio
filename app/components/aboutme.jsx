import {
  FaBirthdayCake,
  FaGraduationCap,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import Link from "next/link";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const calculateAge = (birthDateStr) => {
  const birthDate = new Date(birthDateStr);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());
  if (!hasHadBirthdayThisYear) age--;
  return age;
};

const aboutData = [
  {
    icon: <FaBirthdayCake />,
    label: "Age",
    value: `${calculateAge("2000-07-08")}`,
  },
  {
    icon: <FaGraduationCap size={20} />,
    label: "Education",
    value: "Master of Computer Applications",
  },
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "8921386007",
  },
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "clementsijo@gmail.com",
  },
  {
    icon: <MdLocationOn size={20} />,
    label: "Location",
    value: "Palakkad | Kerala",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="px-6 py-24 lg:py-28 bg-gradient-to-b from-indigo-900 to-indigo-800"
    >
      <h1 className="text-4xl md:text-6xl tracking-wider uppercase text-white font-extrabold text-center mb-12">
        About Me
      </h1>

      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        {/* LEFT — Text Content */}
        <div className="space-y-6 text-center lg:text-left px-4">
          <h2 className="text-indigo-300 uppercase font-semibold text-xl tracking-widest">
            Hello,
          </h2>
          <p className="text-white text-lg leading-relaxed font-medium">
            I’m a{" "}
            <span className="text-indigo-200 font-semibold">Web Developer</span>{" "}
            who blends creativity with logic — crafting interactive digital
            experiences that feel alive. I love building responsive and
            efficient web applications, from stunning front-end designs to
            robust back-end systems. I strive to make technology simple,
            engaging, and impactful for every user.
          </p>

          <div className="flex justify-center lg:justify-start">
            <Link href="/clementsijo - resume.pdf" download>
              <div className="group flex items-center gap-2 bg-white text-indigo-900 px-6 py-3 font-bold uppercase rounded-lg tracking-wider shadow-md hover:shadow-indigo-500/40 hover:scale-105 transition duration-300">
                Resume
                <span className="-rotate-90 group-hover:rotate-0 transition-transform duration-200">
                  <MdExpandMore size={25} />
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* RIGHT — Info Cards */}
        <div className="flex flex-col w-full lg:w-[80%] mx-auto">
          {aboutData.map((item, i) => (
            <div
              key={i}
              className={`flex items-center justify-between bg-white/95 text-indigo-900 p-6 shadow-lg border border-indigo-100 hover:shadow-indigo-500/40 hover:scale-[1.03] ease-in duration-300 ${
                i === 0
                  ? "rounded-t-xl"
                  : i === aboutData.length - 1
                  ? "rounded-b-xl"
                  : ""
              }`}
            >
              <div className="flex items-center gap-4 text-indigo-700">
                {item.icon}
                <p className="text-lg font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
