'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

export default function ComponentePokemon() {
  const [pokemon, setPokemon] = useState(null)

  const obtenerPokemon = async () => {
    const idAleatorio = Math.floor(Math.random() * 898) + 1
    const respuesta = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idAleatorio}`)
    const respuestaEspecie = await axios.get(respuesta.data.species.url)
    const nombreEspanol = respuestaEspecie.data.names.find(nombre => nombre.language.name === 'es')?.name || respuesta.data.name
    setPokemon({...respuesta.data, nombreEspanol})
  }

  useEffect(() => {
    obtenerPokemon()
  }, [])

  if (!pokemon) return <div>Cargando...</div>

  return (
    <>
      <h2>{pokemon.nombreEspanol}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.nombreEspanol} />
      <p>Altura: {pokemon.height / 10} m</p>
      <p>Peso: {pokemon.weight / 10} kg</p>
      <button onClick={obtenerPokemon}>Nuevo Pokémon</button>
    </>
  )
}