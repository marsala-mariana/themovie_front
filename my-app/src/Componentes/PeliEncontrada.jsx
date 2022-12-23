import axios from "axios";
import React, { useContext } from "react";
import { BusquedaContext } from "../Contexts/BusquedaEncontrada";
import "../Style/PeliEncontrada.css";

const PeliEncontrada = () => {
  const { busquedaProp } = useContext(BusquedaContext);

  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPelicula: busquedaProp.id,
        nombre: busquedaProp.title,
        imagen: busquedaProp.backdrop_path,
      })
      .then(() => alert("Pelicula AGREGADA A FAVORITOS"))
      .catch((error) => console.log(error, "error"));
  };

  console.log(busquedaProp, "pro0p");

  return (
    <div className="container">
      <div className="card ">
        <div className="card-body">
          <ul class="list-group list-group-flush">
            {busquedaProp.map(
              ({
                title,
                overview,
                vote_average,
                origin_language,
                backdrop_path,
                adult,
                release_date,
              }) => {
                return (
                  <div class="card">
                    <img
                      src={
                        "https://image.tmdb.org/t/p/original/" + backdrop_path
                      }
                      class="card-img-top"
                      alt="peli"
                    />
                    <div class="card-body">
                      <p className="card-text" class="parrafo">
                        {title}
                      </p>
                      <p className="card-text" class="parrafo">
                        {overview}
                      </p>
                      <p className="card-text" class="parrafo">
                        {vote_average}
                      </p>
                      <p className="card-text" class="parrafo">
                        {origin_language}
                      </p>
                      <p className="card-text" class="parrafo">
                        {release_date} {adult}
                      </p>
                      <button
                        className="btn btn-outline-warning "
                        onClick={handleSubmit}
                      >
                        ⭐
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PeliEncontrada;
