import React from 'react'
import './Boton.css'
import { Button } from '@mantine/core';


export default function Boton({texto, onClick, clase}) {
  return (
    <Button onClick={onClick} clase={clase} variant="gradient" gradient={{ from: 'indigo', to: 'cyan'}}
    >{texto}</Button>
  )
}
