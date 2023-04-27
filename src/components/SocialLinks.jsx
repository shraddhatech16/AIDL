import React from 'react'
import { FaLinkedin} from 'react-icons/fa'
import { AiFillInstagram } from "react-icons/ai";

import {HiOutlineMail}from 'react-icons/hi'
import {BsFillPersonCheckFill} from 'react-icons/bs'
const SocialLinks = () => {
    const links=[
    {
        id:1,
        child:(
            <>
            LinkedIn<FaLinkedin size={30}/>
            </>
        ),
        href:'https://www.linkedin.com/in/fcrit-aidl-group-2948b5228/',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Instagram<AiFillInstagram size={30}/>
            </>
        ),
        href:'https://www.instagram.com/aidl_fcrit/?igshid=YmMyMTA2M2Y%3D',
    },
    {
        id:3,
        child:(
            <>
            Mail<HiOutlineMail size={30}/>
            </>
        ),
        href:'mailto: aidl@gmail.com',
    },
    {
        id:4,
        child:(
            <>
            Become a Member<BsFillPersonCheckFill size={30}/>
            </>
        ),
        href : "https://docs.google.com/forms/d/e/1FAIpQLSeIGFlrTR6lVYbN8mm6we1dbX_G6MFC2zHCvp1JcAfG5u3h5A/viewform",
    },
]
  return (
    <div className="lg:flex flex-col top-[35%] left-0 fixed">
    <ul>
    {links.map(({id,child,href, style,download})=>(
        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500" + style}>
        <a 
        href={href} 
        className="flex justify-between items-center w-full text-white" 
        download={download}
        target='_blank'
        rel="noreferrer"
        >
        {child}</a>
        </li>

    ))}
    </ul>
    </div>
  )
}

export default SocialLinks
