import React from "react";
import useInput from "../Hooks/useInput";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Style/Registro.css";

const Registro = () => {
  const navigate = useNavigate();

  const nombre = useInput();
  const email = useInput();
  const contraseña = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/api/users/registro", {
        nombre: nombre.value,
        email: email.value,
        contraseña: contraseña.value,
      })
      .then((res) => res.data)
      .then(() => navigate("/login"));
  };

  return (
    <div className="container">
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <div className="Auto">
            <h1>Registrarse </h1>
            <label for="floatingInput">Nombre</label>
            <input
              type="nombre"
              className="form-control"
              id="nombre"
              aria-describedby="nombre"
              placeholder="Escribi tu nombre"
              {...nombre}
            />
          </div>

          <div className="mb-3">
            <label for="floatingInput">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Escribi tu email"
              {...email}
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Contraseña</label>
            <input
              type="contraseña"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
              {...contraseña}
            />
          </div>

          <button type="submit" class="w-100 btn btn-warning">
            Enviar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registro;
