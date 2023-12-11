import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getPlanet } from '../apis/apiClient'

export default function PlanetEarth() {
  const name = 'Earth'
  const { data, isLoading, isError } = useQuery(['Earth'], () =>
    getPlanet(name)
  )
  console.log(getPlanet)

  if (isLoading) {
    return <div>Planet Data Loading</div>
  }
  if (isError || !data) {
    return <div>There has been an error</div>
  }

  return (
    <>
      <div className="planet">
        <h1>Planet Earth</h1>
        <img src="client/public/images/earth.png" alt="Planet Earth" />
      </div>
    </>
  )
}
