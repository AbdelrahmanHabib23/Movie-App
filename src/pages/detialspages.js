/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useParams } from "react-router-dom";
import UseFetchDetails from "../hooks/UseFetchDetials";
import { useSelector } from "react-redux";
import moment, { duration } from "moment";
import HorizotialCardScroll from "../component/HorizotialCardScroll";
import UseFetch from "../hooks/UseFetch";

const DetailsPage = () => {
  const imageURL = useSelector((state) => state.movieo.imageURL);

  const params = useParams();
  const { data } = UseFetchDetails(`/${params.explore}/${params.id}`);
  const { data: castdata } = UseFetchDetails(
    `/${params.explore}/${params.id}/credits`
  );
  const{data:similarData} = UseFetch(`/${params.explore}/${params.id}/similar`)
  const{data:recommendationData}= UseFetch(`/${params.explore}/${params.id}/recommendations`)

  console.log("data", data);
  console.log("cast", castdata);
const duration = (data?.runtime/60).toFixed(1).split(".")
  return (
    <div>
      <div className="w-full h-[350px] hidden lg:block relative">
        <div className="w-full h-full">
          <img
            src={`${imageURL}${data?.backdrop_path}`}
            alt="Backdrop"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute w-full h-full top-0 bg-gradient-to-t from-neutral-950/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-11 mb-24   ">
        <div className="relative mx-auto lg:-mt-36 flex  mx-8 ">
          <img
            src={`${imageURL}${data?.backdrop_path}`}
            alt="Backdrop"
            className="h-80 w-60 rounded-xl object-cover shadow-lg"
          />
          <div className="flex-3 mt-40 md:px-12 ">
            <h2 className="text-xl font-bold ">
              {data?.title || data?.name}
            </h2>
            <div className="bg-neutral-600 p-[0.5px] rounded-full"></div>
            <p className="text-neutral-600 text-lg">{data?.tagline}</p>
            <div className="flex gap-4">
              <p>Rating : {Number(data?.vote_average).toFixed(1)}+</p>
              <span>|</span>
              <p>view: {Number(data?.vote_count).toFixed(0)}</p>
              <span>|</span>
              <p>Duration : {duration[0]} h {duration[1]}m</p>
              
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-1">overview</h3>
              <p>{data?.overview}</p>

              <div className="bg-neutral-600 p-[0.5px] rounded-full"></div>
              <div className="flex items-center gap-3">
              <p>status : {data?.status}</p>
              <span>|</span>

              <p>Release Date :{moment(data?.release_date).format("MMMM Do YYYY")}</p>
              
              <span>|</span>
              <p>Revenue: {Number(data?.revenue)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <HorizotialCardScroll data={similarData} heading={"Similar "+params.explore}/>
        <HorizotialCardScroll data={recommendationData} heading={"Recommendation "+params.explore}/>
      </div>
    </div>
  );
};

export default DetailsPage;
