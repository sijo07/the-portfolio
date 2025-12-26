"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaHome, FaCode, FaProjectDiagram, FaUser, FaEnvelope } from "react-icons/fa";

const Header = () => {
  const [pagescroll, setPageScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => setPageScroll(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home", icon: FaHome },
    { id: 2, link: "skills", icon: FaCode },
    { id: 3, link: "projects", icon: FaProjectDiagram },
    { id: 4, link: "about", icon: FaUser },
    { id: 5, link: "contact", icon: FaEnvelope },
  ];

  return (
    <>
      {/* Header Container */}
      <div
        className={`w-full h-16 z-10 fixed bg-white text-black duration-300 ease-in ${pagescroll ? "shadow-lg" : ""
          }`}
      >
        <div className="flex justify-center md:justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
          {/* Logo */}
          <Link href="/#home">
            <Image
              src="/assets/logo.png"
              alt="Clementsijo"
              width={150}
              height={50}
              className="object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden md:flex">
              {links.map(({ id, link }) => (
                <Link key={id} href={`/#${link}`}>
                  <li className="ml-10 text-sm font-bold uppercase cursor-pointer duration-200 ease-out hover:scale-105 tracking-wider">
                    {link}
                  </li>
                </Link>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar - Mobile Only */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-indigo-900 text-white shadow-2xl z-50">
        <div className="flex justify-around items-center h-16 max-w-screen-xl mx-auto">
          {links.map(({ id, link, icon: Icon }) => (
            <Link key={id} href={`/#${link}`}>
              <div
                onClick={() => setActiveSection(link)}
                className={`flex flex-col items-center justify-center px-3 py-2 cursor-pointer transition-all duration-200 ${activeSection === link
                  ? "text-purple-400 scale-110"
                  : "text-white/70 hover:text-white"
                  }`}
              >
                <Icon className="text-xl mb-1" />
                <span className="text-xs capitalize font-medium">{link}</span>
              </div>
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Header;
