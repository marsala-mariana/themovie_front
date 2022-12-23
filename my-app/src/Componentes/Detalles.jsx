import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "../Style/Detalle.css";

const Detalles = () => {
  const { id } = useParams();
  const [detalle, setDetalles] = useState([]);

  const imgStyles = {
    heigth: "230px",
    width: "230px",
    objectFit: "top",
    marginTop: "5px",
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e6b47ec00815f9556edf09df2987c8f0&language=en-US`
      )
      .then((res) => res.data)
      .then((detalle) => {
        setDetalles(detalle);
      });
  }, []);

  return (
    <div
      className="d-flex align-items-center d-flex justify-content-center"
      class="unos"
    >
      <div className="col-md-10  c.col-sm-12 card text-center">
        <div className="card-doby">
          <div className="center d-flex justify-content-center">
            <img
              src={`https://image.tmdb.org/t/p/original/${detalle?.poster_path}`}
              alt="imagen"
              className="card-img-top img-thumbnail"
              whidt="50"
              style={imgStyles}
            />
            <div className="card-body">
              <h6>{detalle.title}</h6>
              <p>{detalle.overview}</p>
              <p>Popularidad: {detalle.popularity}</p>
              <p>Tiempo: {detalle.runtime}</p>
              <p>Estado: {detalle.status}</p>
              <p>Voto: {detalle.vote_average}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detalles;
