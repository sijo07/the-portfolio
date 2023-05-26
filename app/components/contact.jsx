import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
   <div className="w-full  lg:py-24 py-12">
      <div id="contact" className="lg:w-3/5 mx-auto text-center">
        <div className="flex flex-col md:flex-row bg-white shadow-2xl">
          <div className="w-full h-full">
            <div className="bg-indigo-900 lg:rounded-bl-xl lg:rounded-tl-xl text-white lg:py-36 px-20">
              <h2 className="lg:text-3xl  text-lg font-bold capitalize mb-2 lg:py-0 py-6">
                love to hear from you,
              </h2>

              <div className="border-2 w-10 border-white-800 inline-block mb-2"></div>
              <p>
                I'm currently looking for new opportunities. <br />
                My inbox is always open. Whether you have any question or just
                want to say hi.
              </p>
              <p className="capitalize lg:text-2xl py-4  text-2xl">
                get in touch!
              </p>
              <div className="group flex items-center justify-center tracking-wider cursor-pointer py-5 ">
                <div className="grid grid-cols-4 ">
                  <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                    <a href="https://www.linkedin.com/in/clement-sijo-l-421a42222">
                      <FaLinkedin size={25} />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                    <a href="https://github.com/sijo07">
                      <FaGithub size={25} />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                    <a href="mailto:clementsijo@gmail.com">
                      <FaEnvelope size={25} />
                    </a>
                  </div>
                  <div className="flex items-center justify-center p-3 rounded-x shadow-md shadow-black hover:scale-105 duration-200 cursor-pointer">
                    <a href="tel:+91 8921386007">
                      <FaPhone size={25} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-3/5  h-full">
            <div className="py-10">
              <h2 className="text-3xl font-bold capitalize text-indigo-900 mb-2">
                connect with me.
              </h2>
              <form
                action="https://getform.io/f/14ebe776-f3da-4bcf-a8af-85222e57a410"
                method="post"
              >
                <div className="p-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="bg-gray-100 w-80 p-2 border-2 rounded-lg flex focus:outline-none border-blur-200"
                    required
                  />
                </div>
                <div className="p-4">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    className="bg-gray-100 w-80 p-2 border-2 rounded-lg flex focus:outline-none border-blur-200"
                    required
                  />
                </div>
                <div className="p-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-gray-100 w-80 p-2 border-2 rounded-lg flex focus:outline-none border-blur-200"
                    required
                  />
                </div>
                <div className="p-4">
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Message"
                    className="bg-gray-100 w-80 border-2 rounded-lg p-3 flex focus:outline-none border-blur-200 resize-none"
                    required
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="group my-4 bg-indigo-900 text-white px-8 py-3 font-bold uppercase rounded-full tracking-wider cursor-pointer hover:scale-105 duration-200">
                    send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
