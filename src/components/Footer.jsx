import { Typography } from "@material-tailwind/react";
import React from "react";

function Footer() {
  return (
    <footer className="w-full p-8  bg-gradient-to-b from-black via-black to-gray-800 ">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
       
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal text-white">
        &copy; 2023 AIDL CLUB FCRIT
      </Typography>
    </footer>
  );
}
export default Footer;
