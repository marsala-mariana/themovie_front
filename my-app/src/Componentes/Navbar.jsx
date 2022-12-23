import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuDesplegable from "./MenuDesplegable";
import { useState } from "react";
import axios from "axios";
import { BusquedaContext } from "../Contexts/BusquedaEncontrada";

const Navbar = () => {
  const usuario = JSON.parse(localStorage.getItem("user")) || {};
  const navigate = useNavigate();

  const [input, setInput] = useState([]);
  const { setBusquedaProp } = useContext(BusquedaContext);

  const handlePeli = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/multi?api_key=e6b47ec00815f9556edf09df2987c8f0&query=${input}`
      )
      .then((res) => res.data)
      .then((peli) => setBusquedaProp(peli.results))
      .then(() => navigate("/busqueda"))
      .catch(() => console.log("Error"));
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:3000/">
            Movie
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="http://localhost:3000/"
                >
                  Peliculas
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link active"
                  aria-current="page"
                  href="http://localhost:3000/tv"
                >
                  Programas de Tv
                </a>
              </li>

              <>
                {usuario.nombre ? (
                  <MenuDesplegable />
                ) : (
                  <div className="btn-toolbar">
                    <div className="btn-group me-2" role="group">
                      <Link to="/registro">
                        <button
                          className="btn btn-outline-warning  "
                          type="registro"
                        >
                          Registro
                        </button>
                      </Link>
                    </div>

                    <div className="btn-group me-2" role="group">
                      <Link to="/login">
                        <button
                          className="btn btn-outline-warning"
                          type="loggin"
                        >
                          Iniciar Sesión
                        </button>
                      </Link>
                    </div>
                  </div>
                )}
              </>
            </ul>
            <form class="d-flex" role="search" onSubmit={handleSubmit}>
              <input
                onChange={handlePeli}
                class="form-control me-2"
                type="search"
                placeholder="Busqueda"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
