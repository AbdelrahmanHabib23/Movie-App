/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import Card from "../component/card";

const SearchPages = () => {
  const location = useLocation();
  const [data, setData] = useState([]);
  const [page, setpage] = useState(1);
  const navigation = useNavigate();
  const query = location.search.slice(3);
  const fetchData = async () => {
    try {
      const response = await axios.get(`/search/collection`, {
        params: {
          query: location.search.slice(3),
          page: page,
        },
      });

      setData((prev) => [...prev, ...response.data.results]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setpage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  useEffect(() => {
    if (query) {
      fetchData();
    }
  }, [page]);

  useEffect(() => {
    if (query) {
      fetchData();
      setData([]);
      setpage(1);
    }
  }, [location?.search]);

  return (
    <div className="pt-16">
      <div>
        <input
          type="text"
          placeholder="Search here ..."
          onChange={(e) => navigation(`.search?q=${e.target.value}`)}
          value={query.split('%20')?.join("")}

        />
      </div>
      <div className="container mx-auto ">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          Search
        </h3>
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-5">
          {data.map((searchData, index) => (
            <Card
              key={searchData.id} // Added key prop
              data={searchData}
              index={`${searchData.id}exploresection`}
              media_type={searchData.media_type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPages;
