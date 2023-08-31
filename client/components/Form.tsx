import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'

export default function Form() {
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

  const [selectedPlanet, setSelectedPlanet] = useState('')

  const handleSelectChange = (event) => {
    setSelectedPlanet(event.target.value)
  }

  if (error) {
    return `Could not load details for ${name}`
  }

  if (isLoading) {
    return <>...Loading</>
  }

  return (
    <form>
      <label>
        <select value={selectedPlanet} onChange={handleSelectChange}>
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
