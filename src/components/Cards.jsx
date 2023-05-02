import React from "react";

import AS from '../components/images/AS.png';
import MS from '../components/images/MS.png';
import SMK from '../components/images/SMK.png';
import PC from '../components/images/PC.png';



const Cards = () => {
  const techs = [
    {
      id: 1,
      src: MS,
      title: "Dr. Milind Shah",
      style: "shadow-blue-600",
      posi:"Head of the Club",
    },
    {
      id: 2,
      src: SMK,
      title: "Dr. S. M. Khot",
      style: "shadow-blue-600",
      posi:"Principal",

    },
   
    {
      id: 3,
      src: PC,
      title: "Dr. Pranali Choudhari",
      style: "shadow-blue-600",
      posi:"Member",

    },
 
    {
      id: 4,
      src: AS,
      title: "Mr. Amroz Siddiqui",
      style: "shadow-blue-600",
      posi:"Member",

    },
    
   
   
  ];

  return (
    <div
      name="Cards"
      className="my-20 mt-10 inline-block bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mb-10 inline-block mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div>

          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
          The People

          </p>
          <p className="py-6">Driving Force behind the club...

          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-30 px-12 sm:px-0 sm:py-100">
          {techs.map(({ id, src, title, style ,posi}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-60 mx-auto" />
              <p className="mt-4">{title}</p>
              <p className="mt-4">{posi}</p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
