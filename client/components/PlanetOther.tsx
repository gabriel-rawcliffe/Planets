import { Params, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'

import { getPlanet } from '../apis/apiClient'
import { Planet } from '../../models/planets'

export default function PlanetOther() {
  // const { name } = useParams<Params>()
  const name = 'Neptune'
  const {
    data: otherPlanet,
    isLoading,
    error,
  } = useQuery(['planet', name], () => getPlanet(name))

  console.log(otherPlanet)

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Oops! Something went wrong...</div>

  return (
    <>
      <h2>{name}</h2>
      <img src="#" alt="other-planet" />
      <ul>
        {otherPlanet?.map((planet: Planet) => (
          <li key={planet.name}>Mass - {planet.mass}</li>
        ))}
        {otherPlanet?.map((planet: Planet) => (
          <li key={planet.name}>Period - {planet.period}</li>
        ))}
        {otherPlanet?.map((planet: Planet) => (
          <li key={planet.name}>Distance - {planet.distance_light_year}</li>
        ))}
      </ul>
    </>
  )
}
