import { useQuery } from '@tanstack/react-query'

import { getPlanet } from '../apis/apiClient.ts'
import { Planet } from '../../models/planets.ts'
import * as utils from '../helpers.ts'

interface Props {
  name: string
}

export default function PlanetOther(props: Props) {
  // const name = 'Neptune'
  const {
    data: otherPlanet,
    isLoading,
    error,
  } = useQuery(['planet', props.name], () => getPlanet(props.name))
  const crab = {
    id: 1,
    species: 'king',
    mass: 3,
    length: 2,
    lifetime: 5,
    description: 'I am a King',
  }

  console.log(otherPlanet)

  if (isLoading) return <div>Loading...</div>

  if (error) return <div>Oops! Something went wrong...</div>

  return (
    <>
      <div className="planet">
        <h1>{props.name}</h1>
        <img
          src={`client/public/images/${props.name.toLowerCase()}.png`}
          alt={`${props.name.toLowerCase()}`}
        />
        <ul>
          {otherPlanet?.map((planet: Planet) => (
            <li key={planet.name}>
              Mass - {utils.planetMassInCrabs(otherPlanet[0], crab)} crab
              equivalents
            </li>
          ))}
          {otherPlanet?.map((planet: Planet) => (
            <li key={planet.name}>
              Period - {utils.oritalPeriodInCrabs(otherPlanet[0], crab)} crab
              lives
            </li>
          ))}
          {otherPlanet?.map((planet: Planet) => (
            <li key={planet.name}>
              Distance - {utils.distanceInCrabs(otherPlanet[0], crab)} crab
              lengths
            </li>
          ))}
          <li>Contains crabs? - YES!!</li>
        </ul>
      </div>
    </>
  )
}
