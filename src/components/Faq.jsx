import React, { useState } from "react";
import data from "./data";
import { FaCaretRight } from "react-icons/fa";
import { Container} from "react-bootstrap";

function Faq() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <Container fluid className="faq-section">

    <div
    name="faq" id="FAQ"
    className="my-20 mt-10 inline-block bg-gradient-from-b to-gray-800 to-black w-full h-screen pt-20 "
  >
    <div className="max-w-screen-lg mb-10 inline-block mx-auto p-2 flex flex-col justify-center w-full h-full text-white pt-20 ">
      <div>

        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline ">
        Some FAQs

        </p>
      
      <div className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex justify-center items-center text-white">
        <div className="w-3/4 h-auto my-4 mx-auto p-4 bg-gradient-to-black from-gray-100 to-black rounded-lg">
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center my-3 px-4">
              <div className="flex items-center justify-between w-full border-b-2 border-rose-500">
                <h2 className="text-2xl lg:text-4xl font-bold text-[#c59d5f]">
                  {item.title}
                </h2>
                <div
                  className={`text-2xl lg:text-4xl cursor-pointer opacity-90 transition duration-500 ${
                    selected === i ? "rotate-90" : "rotate-0"
                  }`}
                  onClick={() => toggle(i)}
                >
                  <FaCaretRight />
                </div>
              </div>
              <div
                className={`p-3 text-xl lg:text-2xl transition duration-500 ${
                  selected === i ? "block" : "hidden"
                }`}
              >
                <h2 className="mb-2">{item.stitle}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
</Container>
  );
}

export default Faq;
