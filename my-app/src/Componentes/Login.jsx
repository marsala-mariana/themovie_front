import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";
import "../Style/Registro.css";

const Login = () => {
  const navigate = useNavigate();
  const email = useInput();
  const contraseña = useInput();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:3001/api/users/login",
        {
          email: email.value,
          contraseña: contraseña.value,
        },
        { withCredentials: true }
      )
      .then((res) => localStorage.setItem("user", JSON.stringify(res.data)))
      .then(() => {
        navigate("/");
      });
  };

  return (
    <div className="container">
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <h1> Por favor ingresa</h1>
          <div className="mb-3">
            <label for="floatingInput">Correo electrónico :</label>
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Escribi tu email"
              {...email}
            />
          </div>
          <div className="mb-3">
            <label for="floatingInput">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
              {...contraseña}
            />
          </div>
          <button type="submit" class="w-100 btn btn-warning">
            Ingesar
          </button>
        </form>
      </main>
    </div>
  );
};
export default Login;
