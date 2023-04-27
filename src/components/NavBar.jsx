import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "ABOUT US",
    },
    {
      id: 2,
      link: "EVENTS",
    },
    {
      id: 3,
      link: "FAQ",
    },
    {
      id: 4,
      link: "MEET THE COMMITEE",
      
    },
    {
      id: 5,
      link: "CONTACT US",
      href: "mailto: aidl@gmail.com",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed">
      <div>
        <h1 className="text-3xl ml-2">AIDL FCRIT</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, href }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
            <a
              href={href}
              className="hidden : flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
            {href}
              
            </a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
              <a
              href={href}
              className="hidden : flex justify-between items-center w-full text-white"
              target="_blank"
              rel="noreferrer"
            >
            {href}
              
            </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
