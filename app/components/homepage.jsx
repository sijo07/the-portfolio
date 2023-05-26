import React from "react";
import Profile from "public/assets/Profile.png";
import Image from "next/image";
import { MdExpandMore } from "react-icons/md";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div id="home" className="h-screen w-full text-center">
        <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
          <div className="w-64 h-64 mx-auto px-6 py-3">
            <Image src={Profile} alt="" />
          </div>
          <h1 className="uppercase font-bold text-indigo-900 text-4xl px-6 py-3">
            Front-End Developer
          </h1>
          <p className="text-gray-600 max-w-xl mx-auto text-1xl">
            I'm a self-taught developer with extensive knowledge and delivering
            quality works using web technologies like <br />
            <span className="font-semibold text-3sm">
              React Js, Next JS,Tailwind CSS, Bootstrap etc.
            </span>
          </p>
          <Link href="/#skills">
            <div className="group flex items-center justify-center my-8 bg-indigo-900 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider">
              know more
              <span className="-rotate-90 duration-100 ease-in group-hover:rotate-0">
                <MdExpandMore size={25} />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
