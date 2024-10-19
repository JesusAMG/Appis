'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ComponentePerro() {
  const [imagenPerro, setImagenPerro] = useState('')

  const obtenerPerro = async () => {
    const respuesta = await axios.get('https://dog.ceo/api/breeds/image/random')
    setImagenPerro(respuesta.data.message)
  }

  useEffect(() => {
    obtenerPerro()
  }, [])

  if (!imagenPerro) return <div>Cargando...</div>

  return (
    <>
      <h2>Perro Aleatorio</h2>
      <img src={imagenPerro} alt="Perro aleatorio" />
      <button onClick={obtenerPerro}>Nuevo Perro</button>
    </>
  )
}