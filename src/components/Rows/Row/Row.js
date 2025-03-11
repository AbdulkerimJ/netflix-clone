import axios from "../../../utils/axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ title, fetchURL, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchURL);
        setMovies(request.data.results);
      } catch (err) {
        console.log("Error fetching data:", err);
      }
    })();
  }, [fetchURL]);

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    movieTrailer(
      movie?.title ||
        movie?.original_title ||
        movie?.name ||
        movie?.original_name
    )
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        const videoId = urlParams.get("v");
        setTrailerUrl(videoId);
      })
      .catch((err) => {
        console.log("Movie trailer not found:", err);
      });
  };

  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h1 className="row-title">{title}</h1>
      <div className="row-posters">
        {movies?.length > 0 &&
          movies.map((movie, i) => (
            <img
              onClick={() => handleClick(movie)}
              key={i}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={`${movie.name || movie.title}`}
              className={`row-poster ${isLargeRow ? "row-posterLarge" : ""}`}
            />
          ))}
      </div>
      {trailerUrl && (
        <div
          style={{
            padding: "2.5 rem",
            marginTop: "-5rem",
            marginBottom: "5rem",
          }}
        >
          <YouTube videoId={trailerUrl} opts={opts} />
        </div>
      )}
    </div>
  );
};

export default Row;
