import React from "react";
import CP from '../components/images/CP.png';
import Secre from '../components/images/Secre.png';
import Asec from '../components/images/Asec.png';
import Commu from '../components/images/Commu.png';
import Event from '../components/images/Event.png';
import AEvent from '../components/images/AEvent.png';
import PRH from '../components/images/PRH.png';
import APRH from '../components/images/APRH.png';
import TH from '../components/images/TH.png';
import ATec from '../components/images/ATec.png';
import Treas from '../components/images/Treas.png';
import { Container} from "react-bootstrap";
import Footer from "./Footer";

function CoreComm() {
return(
   <>
    <Container fluid className="corecomm-section" id="CORE COMMITEE">
    <div className="mt-0 justify-items-center gap-1 justify-items-center pt-10 text-gray-400 text-sm pb-8 sm:ml-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 font-normal text-white text-sm pb-4">
    <p className="text-4xl font-bold inline border-b-4 border-gray-500 text-white pt-10 mt-10  ">
          Lets Meet the Core Commitee 2022-2023
        </p></div>
        <br />
      
    <div name="CoreComm" id="CORE COMMITEE" className="flex min-h-screen items-center justify-center ">
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={CP} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">ChairPerson</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Aamna Ahmed</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/omnevase/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/OmNevase">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Secre} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Secretary</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Saatvik Inampudi</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/omnevase/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/OmNevase">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={TH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Technical Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Shraddha Alawane</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/shraddha-alawane-78033421">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/shraddhatech16">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Event} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Event Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Vasundhara Nimbalkar</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/vasundhara-nimbalkar-877446211">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/vasundhara1106">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={PRH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">PR Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Machlin Sekar</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/machlin-sekhar-664ab2211">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Machlinsekhar">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Commu} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Communication Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Austin Paul</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/austin-paul-16279a248/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/AustinPaul01">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Asec} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Assi. Secretery</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Himanshu Agarwal</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/himanshu-agarwal-0419b4230">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/HimanshuAgarwal136">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={ATec} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Assi. Technical Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Md Tahir</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/md-tahir-s-91b62422b/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/tahir-1134">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={AEvent} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Assi. Event Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Avanti Kamod</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/omnevase/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/OmNevase">GitHub</a></button>
        </div>
      </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={APRH} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Assi. PR Head</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Om Nevase</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/omnevase/">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/OmNevase">GitHub</a></button>
        </div>
        </div>
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-72">
          <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={Treas} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <h1 className="font-dmserif text-3xl font-bold text-white">Treasurer</h1>
          <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Aditya A.</p>
          <h1 className="font-dmserif text-2xl font-bold text-white">Lets Connect</h1>
          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://www.linkedin.com/in/aditya-arockiadass-3529ab247">LinkedIn</a></button>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

          <button className="rounded-full bg-blue-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"><a className="text-white" href="https://github.com/Aditya101103">GitHub</a></button>
        </div>
      
      </div>
    </div>
    </div>
  </Container>
  <div><Footer/>
  </div>
  </>
);};
export default CoreComm;

