import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import MovieList from "../../components/Rows/RowList/RowList";

function Home() {
  return (
    <div className="home">
      <Header />
      <Banner />
      <MovieList />
      <Footer />
    </div>
  );
}

export default Home;
