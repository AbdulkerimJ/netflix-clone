
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request);
        const randomMovie = request.data.results[
          Math.floor(Math.random() * request.data.results.length) + 1
        ];
        
        setMovie(
          randomMovie
        );
      } catch (err) {
        console.log("Eror fetchind data:", err);
      }
    })();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n -1) + "..." : str;
  }

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.name || movie?.origional_name}</h1>
        <div className="banner-buttons">
          <button className="banner-btn play-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </div>
  );
};

export default Banner;
