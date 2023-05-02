import React from "react";
const Address = () => {
    return (
        <div
      name="Address" id="CONTACT US"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-2 flex flex-col justify-center w-full h-full text-white">
        <div>

          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline leading-relaxed leading-1">
          Fr.Conceicao Rodrigues Institute of Technology
          </p>
          <p className="py-6">Address: Agnel Technical Educational Complex, Sector 9A, Vashi, Navi Mumbai, Maharashtra, India - 400703

          </p>
          <p lassName="py-6">Phone: (022) 27771000 , 27662949</p>
        </div>
        <iframe title="myframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.732104486295!2d72.9891293748737!3d19.075512682128995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6cae0d8c5ab%3A0xbbf4481d662ca2d8!2sFr.%20Conceicao%20Rodrigues%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1682616778306!5m2!1sen!2sin" 
        width="600" 
        height="450" 
        style={{border:"0"}} 
        allowfullscreen="" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    </div>
        );
};

export default Address;