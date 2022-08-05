import React, { useState } from 'react';
import './Listadetareas.css'
import Boton from '../Boton/Boton.js'

export default function Listadetareas(props) {
  


  const borrarTarea = (id) => {
      const nuevasTareas = props.tareas.filter((tarea,i) => id !== i);
      props.setTareas(nuevasTareas);
  }
  
  
  return (
    <div>
       <ul id='lista-tareas'>
        {props.tareas.map((tarea,i) => <Tarea id={i} borrarTarea={borrarTarea} descripcion={tarea.descripcion} prioridad={tarea.prioridad} key={i} tareas={props.tareas} setTareas={props.setTareas}/>)}
       </ul>
    </div>
  )
}
const Tarea = (props) => {
   const [liClassName, setLiClassName] = useState(`${props.prioridad}`);
   const [completeButton, setCompleteButton] = useState('Completado');
   const [estadoEditar, setEstadoEditar] = useState('sin editar');

   const [descripcionInterna, setDescripcion] = useState(`${props.descripcion}`);

   const cambiarCompletar = () => {
    if (liClassName !== 'completado') {
      setLiClassName('completado');
      setCompleteButton('Cancelar completado')
    } else if (liClassName === 'completado'){
      setLiClassName(`${props.prioridad}`);
      setCompleteButton('Completado')
    }
   }

   const editarContenido = () => {  
    setEstadoEditar('editar');
   }

   if (estadoEditar === 'sin editar') {
     return (
         <li className={`${liClassName}`}>
          {descripcionInterna}
          <div className="botones-container">
            <Boton texto="Eliminar" id="boton" onClick={(e) => {props.borrarTarea(props.id)}}/>
            <Boton texto="Editar" id="boton" onClick={editarContenido}/>
            <Boton texto={completeButton} id="boton" onClick={cambiarCompletar}/>
            </div>
            </li>
     )
   } else if (estadoEditar === 'editar'){
    return (
      <li className={`${liClassName}`}>
        <input id="tarea" type="text" name="tarea" value={descripcionInterna} onChange={(e) => (setDescripcion(e.target.value))}></input>
        <select name="prioridad" id="prioridad" onChange={(e) => setLiClassName(e.target.value)}>
        <option value="" disabled>Prioridad</option>
        <option value="prioridad-baja">baja</option>
        <option value="prioridad-media">media</option>
        <option value="prioridad-alta">alta</option>
        </select>
        <button id="boton" onClick={(e) => setEstadoEditar('sin editar')}>Aceptar</button>
        </li> 
    )
   }

  }