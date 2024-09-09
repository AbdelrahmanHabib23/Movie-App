/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable react/jsx-no-comment-textnodes */
// eslint-disable-next-line
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaAngleRight ,FaAngleLeft } from "react-icons/fa6";

const BannerHome = () => {
  const bannerData = useSelector((state) => state.movieo.bannerData);
  const imageURL = useSelector((state) => state.movieo.imageURL);
  const [currentImage ,setCurrentImage] = useState(0)
  
   
  const handleLeft = () => {  
    if (currentImage > 0) {  
      setCurrentImage(prev => prev - 1); // Decrement the current image index  
    }  
  };  
  
  const handleRight = () => {  
    if (currentImage < bannerData.length - 1) {  
      setCurrentImage(prev => prev + 1); // Increment the current image index  
    }  
  };
  useEffect(() => {  
    const interval = setInterval(() => {  
      setCurrentImage(prev => {  
        // Move to the next image or reset to the first image  
        return prev < bannerData.length - 1 ? prev + 1 : 0;  
      });  
    }, 4000); // Adjusted interval time to 1000 milliseconds (1 second)  
  
    return () => clearInterval(interval); // Cleanup on unmount  
  }, [bannerData,imageURL,currentImage]); // Depend only on the length of bannerData
  
    return (  
  
      <section className="  w-full h-full">  
        <div className=" flex min-h-full max-h-[95hv]">  
          
          {bannerData.map((data, index) => (  
            <div key={data.id+"BannerHome"+index} className=" min-w-full min-h-[450px] lg:min-h-full  relative group transition all " style = {{transform : `translateX(-${currentImage * 100}%`}}>  
              <div className="w-full h-full">  
              
                <img  
                  src={imageURL + data.backdrop_path}  
                  alt={data.title || "Banner image"}  
                  className="w-full h-full object-cover"  
                />  
              </div>  
              <div className="absolute top-0 w-full h-full hidden items-center justify-between px-4 group-hover:lg:flex">  
                <button onClick={handleLeft} className="bg-white p-1 rounded-full text-xl z-10 text-black">  
                  <FaAngleLeft />  
                </button>  
                <button onClick={handleRight} className="bg-white p-1 rounded-full text-xl z-10 text-black">  
                  <FaAngleRight />  
                </button>  
              </div>  
  
              <div className="absolute top-0 w-full h-full bg-gradient-to-t from-neutral-900"></div>  
              <div className="container mx-auto ml-10 absolute bottom-0 max-w-md">  
                <div className="w-full absolute bottom-0 max-w-md px-3">  
                  <h2 className="font-bold text-2xl lg:text-4xl text-white drop-shadow-2xl">  
                    {data?.title || data?.name}  
                  </h2>  
                  <p className="text-ellipsis line-clamp-3 my-2">  
                    {data.overview}  
                  </p>  
                  <div className="flex items-center gap-4">  
                    <p>Rating: {Number(data.vote_average).toFixed(1)}+</p>  
                    <span>|</span>  
                    <p>Views: {Number(data.popularity).toFixed(0)}</p>  
                  </div>  
                  <button className="bg-black px-4 py-2 h-full text-white font-bold rounded mt-4 hover:bg-gradient-to-l from-blue-700 to-orange-500 shadow-md transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">  
                    Play Now  
                  </button>  
                </div>  
              </div>  
            </div>  
          ))}  
        </div>  
      </section>  
    );  
  };  
  
  
  


export default BannerHome;
