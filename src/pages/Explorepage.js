/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../component/card"; // Corrected spelling from "compenant" to "component"

const ExplorePage = () => {
  const params = useParams();
  const [pageNo, setPageNo] = useState(1);
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  console.log("params", params.explore);

  const fetchData = async () => {
    setLoading(true); // Start loading
    setError(null); // Clear previous errors

    try {
      const response = await axios.get(`/discover/${params.explore}`, {
        params: {
          page: pageNo,
        },
      });

      setData((prev) => [...prev, ...response.data.results]);

      setTotalPage(response.data.total_pages);
    } catch (err) {
      setError(err); // Set error if API call fails
    } finally {
      setLoading(false); // End loading
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !loading
    ) {
      setPageNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageNo]);

  useEffect(() => {
    fetchData();
    setData([]);
    setPageNo(1);
  }, [params.explore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, []);

  return (
    <div className="pt-16">
      <div className="container mx-10 ">
        <h3 className="capitalize text-lg lg:text-xl font-semibold my-3">
          {`Popular ${params.explore}`}
        </h3>
        {loading && <div>Loading...</div>} {/* Loader */}
        {error && <div>Error: {error.message}</div>} {/* Error message */}
        <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-5 justify-center lg:justify-start">
          {data.map((exploreData) => (
            <Card
              key={exploreData.id} // Assign key correctly
              data={exploreData}
              media_type={params.explore}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
