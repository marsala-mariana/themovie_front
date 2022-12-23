import React from "react";
import { Route, Routes } from "react-router-dom";
import Detalles from "./Componentes/Detalles";

import Favoritos from "./Componentes/Favoritos";
import Home from "./Componentes/Home";
import Login from "./Componentes/Login";
import Navbar from "./Componentes/Navbar";
import PeliEncontrada from "./Componentes/PeliEncontrada";
import Registro from "./Componentes/Registro";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/busqueda" element={<PeliEncontrada />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalles" element={<Detalles />} />
      </Routes>
    </div>
  );
}

export default App;
