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
    
    <footer className="bg-gray-900 text-white">
      
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 font-normal text-white text-sm pb-4"
      >
        <span>© 2023 AIDL CLUB FCRIT.</span>
        <span><Typography color="blue-gray" className="text-center font-normal text-white" >Developed by <a href="https://www.linkedin.com/in/shraddha-alawane-780334212">Technical Head - Shraddha Alawane &</a></Typography>
        <Typography color="blue-gray" className="text-center font-normal text-white" ><a href="https://www.linkedin.com/in/md-tahir-s-91b62422b/">Assi. Technical Head - MD Tahir </a>
  
        </Typography></span>
<span>   
<ul className="justify-items-center grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-1 justify-items-center pt-1 text-gray-400 text-sm pb-8 sm:ml-20">
    {links.map(({id,child,href})=>(
        <li key={id} className={"justify-items-center max-w-fit grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-4 gap-1 justify-items-center text-center pt-2 text-gray-400 text-sm pb-4 sm:ml-2 justify-items-center text-center max-w-fit"}style={{maxWidth:"10px"}}>
        <a 
        href={href} 
        target='_blank'
        rel="noreferrer"
        >
        {child}</a>
        </li>

    ))}</ul></span>   
          </div>
    </footer>
  );
};

export default Footer;