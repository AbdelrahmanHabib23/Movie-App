import React, { useRef } from "react";
import Card from "./card";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";

const HorizotialCardScroll = ({ data = [], heading ,media_type }) => {
  const containerRef = useRef();

  const handleNext = () => {
    containerRef.current.scrollLeft += 300;
  };
  const handleLeft = () => {
    containerRef.current.scrollLeft -= 300;
  };
  return (
    <div>
      <div className="container mx-auto px-8 my-10 ">
        <h2 className="text-xl lg:text-3xl font-bold mb-3">{heading}</h2>
        <div className=" relative">
          <div
            ref={containerRef}
            className="relative grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col overflow-hidden overflow-x-scroll gap-6 z-10 scroll-smooth transition-all scrolbar-none "
          >
             
            {data.map((data, index) => {
              return (
                <Card
                  key={data.id + "heading" + index}
                  data={data}
                  index={index + 1}
                  trending={true}
                  media_type={media_type}
                />
              );
            })}
          </div>
          <div className="absolute top-0 flex justify-between w-full h-full items-center ">
            <button
              onClick={handleLeft}
              className="bg-white text-black p-1 rounded-full z-10 -ml-1"
            >
              <FaAngleLeft />{" "}
            </button>
            <button
              onClick={handleNext}
              className="bg-white text-black p-1 rounded-full z-10 -ml-1 "
            >
              <FaAngleRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HorizotialCardScroll;
