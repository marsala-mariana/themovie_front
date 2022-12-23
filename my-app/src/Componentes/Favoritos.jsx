import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import "../Style/Favoritos.css";

const Favoritos = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const [fav, setFav] = useState();

  const imgStyles = {
    heigth: "230px",
    width: "230px",
    objectFit: "top",
    marginTop: "5px",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/api/favorito/${usuario.id}`, {})
      .then((res) => res.data)
      .then((fav) => setFav(fav));
  }, []);

  const handleSubmit = (id) => {
    axios
      .delete(`http://localhost:3001/api/favorito/borrar/${id}`)
      .then(() => window.location.reload(false))
      .then(() => alert("Eliminado existosamente"));
  };

  console.log(fav, " favoritos");

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h4> ⭐ MIS FAVORITOS</h4>
        </div>
      </div>

      <div className="card" class="favtar">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            {fav?.map((e) => {
              return (
                <li className="list-group-item">
                  {e.nombre}
                  <br />

                  <img
                    className="card-img-top img-thumbnail"
                    src={`https://image.tmdb.org/t/p/original/${e?.imagen}`}
                    alt="imagen"
                    whidt="50"
                    style={imgStyles}
                  />
                  <br />
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => handleSubmit(e.id)}
                  >
                    🗑 Eliminar
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Favoritos;
