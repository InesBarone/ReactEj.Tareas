import React from 'react'
import './Form.css';
import { useState } from 'react';

export default function Form(props) {
    const [descripcionInterna, setDescripcion] = useState('');
    const [prioridadInterna, setPrioridad] = useState('');


    function agregarTareas() {
      props.setTareas([
        ...props.tareas,
        {
          descripcion: descripcionInterna,
          prioridad: prioridadInterna
        }
      ])
    }

  return (
    <div className="form-container">
        <input id="tarea" type="text" name="tarea" placeholder="Descripción de la tarea" onChange={(e) => setDescripcion(e.target.value)}></input> 
        <select name="prioridad" id="prioridad" onChange={(e) => setPrioridad(e.target.value)}>
        <option value="" disabled>Prioridad</option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
        </select>
        <button id="agregar" onClick={() => agregarTareas()}>Agregar!</button>
    </div>
  )
}
