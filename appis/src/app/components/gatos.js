'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ComponenteGato() {
  const [gato, setGato] = useState(null)

  const obtenerGato = async () => {
    try {
      const respuesta = await axios.get('https://api.thecatapi.com/v1/images/search?has_breeds=1')
      const datoGato = respuesta.data[0]
      if (datoGato.breeds?.length > 0) {
        const respuestaRaza = await axios.get(`https://api.thecatapi.com/v1/breeds/${datoGato.breeds[0].id}`)
        setGato({...datoGato, infoRaza: respuestaRaza.data})
      } else {
        setGato(datoGato)
      }
    } catch (error) {
      console.error("Error al obtener datos del gato:", error)
      setGato(null)
    }
  }

  useEffect(() => {
    obtenerGato()
  }, [])

  if (!gato) return <div>Cargando...</div>

  return (
    <>
      <h2>Gato Aleatorio</h2>
      <img src={gato.url} alt="Gato aleatorio" />
      {gato.infoRaza && (
        <div>
          <p>Raza: {gato.infoRaza.name}</p>
          <p>Origen: {gato.infoRaza.origin}</p>
          <p>Temperamento: {gato.infoRaza.temperament}</p>
        </div>
      )}
      <button onClick={obtenerGato}>Nuevo Gato</button>
    </>
  )
}