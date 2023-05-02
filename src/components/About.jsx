import React from "react";

const About = () => {
  return (

    <div
      name="About" id="ABOUT US"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <br />
        </div>

        <p className="text-xl mt-20">
        AIDL Club is a group of Staff and Students of Fr. C. Rodrigues Institute of Technology,

        focusing mainly on activities related to Artificial Intelligence and Deep Learning.
        
        
        </p>
        <br />
        <p className="text-xl">
        The idea is to spread awareness, encourage students, staff and industry professional.
        
        inculcate enthusiasm to take up projects in this domain and solve real life problems of our society.
        </p>
      </div>
    </div>

  );
};

export default About;
