import axios from "axios";
import React from "react";
import "../Style/Home.css";
import { Link } from "react-router-dom";

const HomeMovie = ({ movie }) => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`http://localhost:3001/api/favorito/agregar/${usuario.id}`, {
        idUsuario: usuario.id,
        idPelicula: movie.id,
        nombre: movie.title,
        imagen: movie.backdrop_path,
      })
      .then(() => alert("Pelicula AGREGADA A FAVORITOS"))
      .catch((error) => console.log(error, "error"));
  };

  const imgStyles = {
    heigth: "230px",
    width: "230px",
    objectFit: "top",
    marginTop: "5px",
  };

  // console.log(movie, " movie");
  return (
    <div className="col-md-4 card text-center">
      <div className="card " class="car">
        <div className="center">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
            alt={movie?.title}
            className="card-img-top img-thumbnail"
            whidt="50"
            style={imgStyles}
          ></img>
        </div>
        <div className="card-body">
          <h6 class="titulo">{movie?.title}</h6>
          <Link to="/favoritos">
            <button className="btn  btn-outline-warning" onClick={handleSubmit}>
              ⭐
            </button>
          </Link>
          <Link to={`/detalles/${movie.id}`}>
            <button className="btn btn-outline-warning">Detalle</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeMovie;
