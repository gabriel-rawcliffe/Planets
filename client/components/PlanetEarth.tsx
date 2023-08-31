import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { getPlanet } from '../apis/apiClient'

export default function PlanetEarth() {
  const { data, isLoading, isError } = useQuery(['getPlanet'], () =>
    getPlanet('')
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
      <h1>Planet Earth</h1>
      {data && <img src={data.imageUrl} alt="Planet Earth" />}
    </>
  )
}
