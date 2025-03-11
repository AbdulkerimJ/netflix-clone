import React from "react";
import Row from "../Row/Row";
import requests from "../../../utils/requests";

const RowList = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGIONALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="Trending Now"
        fetchURL={requests.fetchTrending}
        isLargeRow={true}
      />
      <Row
        title="Top Rated"
        fetchURL={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="Action Movies"
        fetchURL={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="Comedy Movies"
        fetchURL={requests.fetchComedyMovies}
        isLargeRow={true}
      />
      <Row
        title="Horror Movies"
        fetchURL={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
      <Row
        title="Romance Movies"
        fetchURL={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
      <Row title="TV Shows" fetchURL={requests.fetchTvShow} 
        isLargeRow={true} />
      <Row
        title="Documentaries"
        fetchURL={requests.fetchDocumentaries}
        isLargeRow={true}
      />
    </div>
  );
};

export default RowList;
