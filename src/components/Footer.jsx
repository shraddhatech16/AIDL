import { Typography } from "@material-tailwind/react";
import React from "react";
import { FaLinkedin} from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai";

import {HiOutlineMail}from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
const Footer = () => {
  const links=[
  {
      id:1,
      child:(
          <>
          <FaLinkedin size={30}/>
          </>
      ),
      href:'https://www.linkedin.com/in/fcrit-aidl-group-2948b5228/',
      style:'rounded-tr-md'
  },
  {
      id:2,
      child:(
          <>
          <AiFillInstagram size={30}/>
          </>
      ),
      href:'https://www.instagram.com/aidl_fcrit/?igshid=YmMyMTA2M2Y%3D',
  },
  {
      id:3,
      child:(
          <>
          <HiOutlineMail size={30}/>
          </>
      ),
      href:'mailto: aidl@gmail.com',
  },
  {
      id:4,
      child:(
          <>
          <BsFillPersonCheckFill size={30}/>
          </>
      ),
      href : "https://docs.google.com/forms/d/e/1FAIpQLSeIGFlrTR6lVYbN8mm6we1dbX_G6MFC2zHCvp1JcAfG5u3h5A/viewform",
  },
]

  return (
    <footer className="w-full p-8  bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="flex flex-col flex-nowrap items-center justify-center gap-y-6 gap-x-12 text-center justify-center">
      <Typography color="blue-gray" className="text-center font-normal text-white flex justify-center">Lets Stay Connected</Typography>
      <ul>
      {links.map(({id,child,href, style,download})=>(
          <li key={id} className={"flex justify-center items-center w-40 h-14 px-4  bg-gray-500" + style}>
          <a 
          href={href} 
          className="flex justify-center items-center w-full text-white" 
          download={download}
          target='_blank'
          rel="noreferrer"
          >
          {child}</a>
          </li>
  
      ))}
      </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal text-white">
        &copy; 2023 AIDL CLUB FCRIT
      </Typography>
      <Typography color="blue-gray" className="text-center font-normal text-white" >Devloped by <a href="https://www.linkedin.com/in/shraddha-alawane-780334212">Technical Head - Shraddha Alawane &</a></Typography>
      <Typography color="blue-gray" className="text-center font-normal text-white" ><a href="https://www.linkedin.com/in/md-tahir-s-91b62422b/">Assi. Technical Head - MD Tahir </a>

      </Typography>
    </footer>
  );
}
export default Footer;