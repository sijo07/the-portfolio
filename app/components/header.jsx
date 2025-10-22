"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navigation, setNavigation] = useState(false);
  const [pagescroll, setPageScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setPageScroll(window.scrollY >= 90);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "about" },
    { id: 5, link: "contact" },
  ];

  return (
    <>
      {/* Header Container */}
      <div
        className={`w-full h-20 z-10 fixed bg-white text-black duration-300 ease-in ${
          pagescroll ? "shadow-lg" : ""
        }`}
      >
        <div className="flex justify-between items-center w-full h-full max-w-screen-xl mx-auto p-4">
          {/* Logo */}
          <Link href="/#home">
            <Image
              src="/assets/logo.png" // ✅ Use public folder path
              alt="Clementsijo"
              width={120}
              height={40}
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

            {/* Mobile Menu Icon */}
            {!navigation && (
              <div
                className="md:hidden cursor-pointer"
                onClick={() => setNavigation(true)}
              >
                <FaBars size={30} />
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={
            navigation
              ? "md:hidden fixed left-0 top-0 w-full h-full bg-black/70 backdrop-blur-sm"
              : ""
          }
        >
          <div
            className={
              navigation
                ? "fixed left-0 top-0 w-full h-full bg-indigo-900 text-white p-10 ease-in duration-500"
                : "fixed top-0 left-[-100%] p-10 h-full ease-in duration-500 bg-indigo-900"
            }
          >
            <div className="flex w-full items-center justify-between">
              <Link href="/#home">
                <h2
                  onClick={() => setNavigation(false)}
                  className="text-3xl font-bold uppercase tracking-wider cursor-pointer"
                >
                  Sijo
                </h2>
              </Link>
              <div
                onClick={() => setNavigation(false)}
                className="p-3 cursor-pointer"
              >
                <FaTimes size={30} />
              </div>
            </div>

            <div className="mt-24 flex flex-col h-fit gap-20">
              <ul className="uppercase">
                {links.map(({ id, link }) => (
                  <Link key={id} href={`/#${link}`}>
                    <li
                      onClick={() => setNavigation(false)}
                      className="py-4 text-2xl tracking-wider cursor-pointer"
                    >
                      {link}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
