import axios from "axios";
import React, { useContext } from "react";
import { BusquedaContext } from "../Contexts/BusquedaEncontrada";
import "../Style/PeliEncontrada.css";

const PeliEncontrada = () => {
  const { busquedaProp } = useContext(BusquedaContext);

  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleSubmit = (data) => {
    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPelicula: data.id,
        nombre: data.title,
        imagen: data.backdrop_path,
      })
      .then(() => alert("Pelicula AGREGADA A FAVORITOS"))
      .catch((error) => console.log(error, "error"));
  };

  console.log(busquedaProp, "PROP");
  return (
    <div className="container">
      <div className="card ">
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {busquedaProp.map((data) => {
              return (
                <div class="card">
                  <img
                    src={
                      "https://image.tmdb.org/t/p/original/" +
                      data.backdrop_path
                    }
                    class="card-img-top"
                    alt="peli"
                  />
                  <div class="card-body">
                    <p className="card-text" class="parrafo">
                      {data.title}
                    </p>
                    <p className="card-text" class="parrafo">
                      {data.overview}
                    </p>
                    <p className="card-text" class="parrafo">
                      {data.vote_average}
                    </p>
                    <p className="card-text" class="parrafo">
                      {data.origin_language}
                    </p>
                    <p className="card-text" class="parrafo">
                      {data.release_date} {data.adult}
                    </p>
                    <button
                      className="btn btn-outline-warning "
                      onClick={() => handleSubmit(data)}
                    >
                      ???
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

export default PeliEncontrada;
