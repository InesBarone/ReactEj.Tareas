import React from "react";
import { Link } from "react-router-dom";
import Boton from "../Boton/Boton.js";
export default function Home() {
  return (
    <div className="container">
      <h1>Lista de tareas!</h1>

      <div className="app-container">
        <Link to="/agregartarea">
          <Boton texto="Agregar tarea" />
        </Link>
        <Link to="/listadetareas">
          <Boton texto="Lista de tareas" />
        </Link>
      </div>

      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </div>
  );
}
