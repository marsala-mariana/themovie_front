import axios from "axios";
import React from "react";
import { useContext } from "react";
import { useEffect } from "react";

import { BusquedaHomeContext } from "../Contexts/HomeBusqueda";
import "../Style/Home.css";
import HomeMovie from "./HomeMovie";

const Home = () => {
  const { movies, setMovies } = useContext(BusquedaHomeContext);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=e6b47ec00815f9556edf09df2987c8f0&language=en-US"
      )
      .then((res) => res.data)
      .then((movies) => setMovies(movies.results))
      .catch(() => console.log("Error"));
  }, []);

  return (
    <div className="container ">
      {movies.map((movie) => {
        return <HomeMovie movie={movie} key={movie.id} />;
      })}
    </div>
  );
};

export default Home;
