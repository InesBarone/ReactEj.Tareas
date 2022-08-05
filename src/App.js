import { useState } from 'react';
import './App.css';
import Form from './Form/Form.js';
import ListadeTareas from './Listadetareas/Listadetareas.js'

function App() {

  const [tareas, setTareas] = useState([
    {'descripcion':'pasear al perro',
     'prioridad':'prioridad-baja'},
     {'descripcion':'pasear al gato',
     'prioridad':'prioridad-baja'}
  ])

  return (
    <div className="App">
      <div className="container">
       <h1>Lista de tareas!</h1>
       <Form setTareas={setTareas} tareas={tareas}/>
       <h3>Tareas</h3>
       <ListadeTareas tareas={tareas} setTareas={setTareas}/>
       {tareas.length > 0 ?  null: <p>Parece que no hay nada por aqui</p>}
       <p className='tips'>Tip: Pueden borrar tareas clickeando en ellas</p>
      </div>
    </div>
  );
}



export default App;
