"use client";
import React from "react";
import Image from "next/image";
import Profile from "public/assets/Profile.png";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <section id="home" className="h-screen w-full flex items-center">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row items-center justify-between px-6 lg:px-24">
        {/* Left Side: Text */}
        <div className="flex-1 text-center md:text-left space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 uppercase animate-fadeIn">
            Hi, I'm Sijo
          </h1>
          <p className="text-gray-700 max-w-lg text-lg md:text-xl font-semibold animate-fadeIn delay-200">
            I develop modern web applications and user-friendly interfaces.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6 animate-fadeIn delay-400">
            <Link href="/#skills">
              <button className="px-6 py-3 border-2 border-indigo-900 text-indigo-900 font-bold rounded-md hover:bg-indigo-900 hover:text-white transition-all duration-300">
                My Skills
              </button>
            </Link>
            <Link href="/#projects">
              <button className="px-6 py-3  border-2 border-indigo-900 text-indigo-900 font-bold rounded-md hover:bg-indigo-900 hover:text-white transition-all duration-300">
                View Projects
              </button>
            </Link>
          </div>
          <div className="flex justify-center md:justify-start space-x-4 mt-6">
            {/* Optional social icons */}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-900 hover:text-indigo-700 transition-all duration-300"
            >
              GitHub
            </a>
            <span className="text-indigo-900 hover:text-indigo-700 transition-all duration-300">
              |
            </span>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noreferrer"
              className="text-indigo-900 hover:text-indigo-700 transition-all duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
       <div className="flex-1 mt-12 md:mt-0 flex justify-center md:justify-end">
  <div className="w-80 h-80 md:w-96 md:h-96 relative rounded-full overflow-hidden border-4 border-indigo-900 shadow-lg animate-fadeIn delay-600">
    <Image
      src={Profile}
      alt="Profile"
      fill
      style={{ objectFit: 'cover' }}
      className="rounded-full"
    />
  </div>
</div>
      </div>

      {/* Scroll Down Button */}
      <div className="absolute bottom-10 w-full flex justify-center">
        <Link href="/#skills">
          <div className="animate-bounce flex flex-col items-center text-indigo-900">
            <MdExpandMore size={35} />
            <span className="text-sm font-semibold mt-1">Scroll Down</span>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
