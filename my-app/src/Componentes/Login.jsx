import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../Hooks/useInput";

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
    <div>
      <main className="form-signin">
        <form className="row" onSubmit={handleSubmit}>
          <h1> Por favor ingresa</h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Escribi tu email"
              {...email}
            />
            <label for="floatingInput">Correo electrónico :</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="contraseña"
              placeholder="Escribi tu contraseña"
              {...contraseña}
            />
            <label for="floatingInput">Contraseña:</label>
          </div>
          <button type="submit" class="w-100 btn btn-lg btn-primary">
            Ingesar
          </button>
        </form>
      </main>
    </div>
  );
};
export default Login;
