"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import profilePic from "@/public/assets/Profile.png";
import { FaGraduationCap } from "react-icons/fa";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

// Education Data
const educationData = [
  {
    degree: "Master of Computer Applications (MCA)",
    university: "Bharathiar University",
    year: "2023 - 2025",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    university: "Bharathiar University",
    year: "2019 - 2022",
  },
];

const AboutMe = () => {
  return (
    <section
      id="about"
      className="w-full py-28 bg-gradient-to-b from-indigo-900 to-indigo-800"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-extrabold text-center text-white mb-16 tracking-wider uppercase"
      >
        About Me
      </motion.h1>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 px-6 items-start">
        {/* Left - Profile */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center lg:items-start gap-6 text-center lg:text-left"
        >
          {/* Profile Image */}
          <div className="w-52 h-52 relative rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <Image
              src={profilePic}
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Name & Role */}
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">
            Clementsijo L
          </h2>
          <p className="text-indigo-200 font-semibold text-lg md:text-xl uppercase">
            Web Developer
          </p>

          {/* Resume Button */}
          <Link href="/clementsijo - resume.pdf" download>
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
              }}
              className="inline-block bg-white text-indigo-900 font-bold px-6 py-3 rounded-lg uppercase cursor-pointer mt-6"
            >
              Resume
            </motion.div>
          </Link>
        </motion.div>

        {/* Right - Intro, Education, Contact */}
        <motion.div className="flex flex-col gap-8">
          {/* Intro */}
          <div>
            <h3 className="text-indigo-200 text-xl font-bold mb-2">Hello,</h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white text-base md:text-lg leading-relaxed"
            >
              I craft interactive, responsive, and user-friendly web
              applications by blending creativity with logic. My goal is to make
              digital experiences simple, engaging, and impactful.
            </motion.p>
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-indigo-200 text-xl font-bold mb-2">
              Education
            </h3>
            <div className="flex flex-col gap-4">
              {educationData.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-4 text-white"
                >
                  <div className="text-indigo-300 text-3xl mt-1">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{edu.degree}</p>
                    <p className="text-indigo-200 text-sm">{edu.university}</p>
                    <p className="text-indigo-200 text-sm">{edu.year}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-indigo-200 text-xl font-bold mb-2">Contact</h3>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-row flex-wrap items-center gap-4 mb-2 text-white"
            >
              {/* Phone */}
              <a
                href="tel:+918921386007"
                className="flex items-center gap-2 font-semibold text-base hover:text-indigo-300 transition-colors duration-200"
              >
                <MdPhone className="text-indigo-300 text-lg" />
                8921386007
              </a>

              <span className="text-lg font-bold">|</span>

              {/* Email */}
              <Link
                href="mailto:clementsijo@gmail.com"
                className="flex items-center gap-2 font-semibold text-base hover:text-indigo-300 transition-colors duration-200"
              >
                <MdEmail className="text-indigo-300 text-lg" />
                clementsijo@gmail.com
              </Link>

              {/* Location */}
              <a
                href="https://maps.app.goo.gl/r5Reu9e4n7s3mKn16"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-base hover:text-indigo-300 transition-colors duration-200"
              >
                <MdLocationOn className="text-indigo-300 text-lg" />
                Palakkad, Kerala
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
