import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Tv = () => {
  const [tv, setTv] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/tv?api_key=e6b47ec00815f9556edf09df2987c8f0&language=en-US"
      )
      .then((res) => res.data)
      .then((pro) => setTv(pro.results))
      .catch(() => console.log("Error"));
  }, []);

  const handleSubmit = (info) => {
    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPelicula: info.id,
        nombre: info.name,
        imagen: info.backdrop_path,
      })
      .then(() => alert("Programa de Tv Agregado a Favoritos "))
      .catch((error) => console.log(error, "error"));
  };

  return (
    <div className="container">
      <div className="card ">
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {tv.map((info) => {
              return (
                <div class="card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      info.backdrop_path
                    }
                    class="card-img-top"
                    alt="peli"
                  />
                  <div class="card-body">
                    <p className="card-text" class="parrafo">
                      {info.name}
                    </p>
                    <p className="card-text" class="parrafo">
                      {info.overview}
                    </p>
                    <p className="card-text" class="parrafo">
                      Original Language: {info.original_language}
                    </p>
                    <p className="card-text" class="parrafo">
                      Popularity: {info.popularity}
                    </p>

                    <button
                      className="btn btn-outline-warning "
                      onClick={() => handleSubmit(info)}
                    >
                      ⭐
                    </button>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tv;
