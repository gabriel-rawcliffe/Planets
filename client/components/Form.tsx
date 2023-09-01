import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function Form({ selectedPlanet, handleSelectChange }) {
  const {
    data: planets,
    error,
    isLoading,
  } = useQuery(['planets'], () => {
    const planets = [
      'Mercury',
      'Venus',
      'Mars',
      'Jupiter',
      'Saturn',
      'Neptune',
      'Uranus',
      'Pluto',
    ]
    return planets
  })

  if (error) {
    return `Could not load details for ${name}`
  }

  if (isLoading) {
    return <>...Loading</>
  }

  return (
    <form>
      <label>
        <select
          value={selectedPlanet}
          onChange={(e) => {
            handleSelectChange(e)
          }}
        >
          {planets?.map((planet) => (
            <option key={planet} value={planet}>
              {planet}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}
