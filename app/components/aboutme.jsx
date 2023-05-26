import Link from "next/link";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import {
  FaBirthdayCake,
  FaEnvelope,
  FaGraduationCap,
  FaPhone,
} from "react-icons/fa";
import { MdExpandMore } from "react-icons/md";

const Aboutme = () => {
  return (
    <>
      <section id="about me" className="px-3 py-28 lg:py-24  bg-indigo-900">
      <h1 className="text-3xl ms:text-7xl tracking-wider uppercase text-white font-bold text-start pl-10">about me</h1>
        <div className="grid lg:grid-cols-2 items-center justify-items-center">
          <div className="p-10">
            <h2 className="text-white uppercase py-5 font-extrabold text-xl">
              hello,
            </h2>
            <p className="text-1xl text-white capitalize font-semibold">
              I'm a Frontend developer with extensive knowledge and a
              self-taught developer delivering quality works using web
              technologies like React Js, Next JS, Tailwind CSS, Bootstrap etc.
              who loves to work for an organization which provides me the
              opportunity to improve my skills and knowledge
            </p>
            <div className="flex items-center justify-center gap-10">
              <Link href="/resume.pdf" download="{true}">
                <div className="group flex items-center justify-center my-8 bg-white text-indigo-900 px-6 py-3 font-bold uppercase rounded-md tracking-wider">
                  Resume
                  <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                    <MdExpandMore size={25} />
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex flex-col lg:gap-1 cursor-pointer ">
            <div
              className=" items-center justify-between bg-white text-indigo-900 p-8 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-14 lg:gap-0 rounded-t-xl"
            >
              <FaBirthdayCake />
              <p>22</p>
            </div>
            <div
              className=" items-center justify-between bg-white text-indigo-900 p-8 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-14 lg:gap-0 "
            >
              <FaGraduationCap size={20} />
              <p> Bachelor of Computer Application</p>
            </div>
            <div
              className=" items-center justify-between bg-white text-indigo-900 p-8 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-14 lg:gap-0 "
            >
              <FaPhone />
              <p> 8921386007</p>
            </div>
            <div
              className=" items-center justify-between bg-white text-indigo-900 p-8 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-14 lg:gap-0"
            >
              <FaEnvelope />
              <p>clementsijo@gmail.com</p>
            </div>
            <div
              className=" items-center justify-between bg-white text-indigo-900 p-8 shadow-lg  hover:scale-105 ease-in duration-300 shadow-black
                    lg:flex flex-col lg:flex-row gap-14 lg:gap-0 rounded-b-xl"
            >
              <MdLocationOn size={20} />
              <p>Palakkad | Kerala</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutme;
