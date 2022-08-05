import React from 'react'
import './Boton.css'

export default function Boton({texto, onClick, id}) {
  return (
    <button onClick={onClick} id={id}>{texto}</button>
  )
}
