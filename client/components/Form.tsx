import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCrabs } from '../apis/apiClient'

export default function Form({ selectedPlanet, handleSelectChange }) {
  // const crabs = await getCrabs()
  // console.log(`crabs: ${crabs}`)
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
    return `Could not load planet`
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
