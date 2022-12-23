import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const MenuDesplegable = () => {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("user")) || {};

  const handleLogOut = async () => {
    try {
      await axios.post("http://localhost:3001/api/users/logout");

      localStorage.removeItem("user");

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="btn-group me-2" role="group">
      <button
        type="button"
        className="btn btn-outline-warning btn-sm dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {usuario.nombre.toUpperCase()}
      </button>

      <div>
        <ul class="dropdown-menu">
          <a className="dropdown-item" href="http://localhost:3000/favoritos">
            Mis Favoritos
          </a>

          <a className="dropdown-item" onClick={handleLogOut}>
            Cerrar sesión
          </a>
        </ul>
      </div>
    </div>
  );
};

export default MenuDesplegable;
