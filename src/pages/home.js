/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import BannerHome from "../component/Bannerhome";
import { useSelector } from "react-redux";
import HorizotialCardScroll from "../component/HorizotialCardScroll";
import UseFetch from "../hooks/UseFetch";

const Home = () => {
  const trending = useSelector((state) => state.movieo.bannerData);
  const { data: nowplaying } = UseFetch("movie/now_playing");
  const { data: toprated } = UseFetch("movie/top_rated");
  const { data: popular } = UseFetch("tv/popular");
  const { data: ontheair } = UseFetch("tv/on_the_air");

  return (
    <div>
      <BannerHome />
      <HorizotialCardScroll
        className="scroll-smooth"
        data={trending}
        heading={"Trending"}
      />
      <HorizotialCardScroll
        data={nowplaying}
        heading={"Nowplaying"}
        media_type={"movie"}
      />
      <HorizotialCardScroll
        data={toprated}
        heading={"Top Rated"}
        media_type={"movie"}
      />
      <HorizotialCardScroll
        data={popular}
        heading={"Popular TV Show"}
        media_type={"tv"}
      />
      <HorizotialCardScroll
        data={ontheair}
        heading={"On the Air"}
        media_type={"tv"}
      />
    </div>
  );
};

export default Home;
