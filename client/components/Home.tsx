import PlanetEarth from './PlanetEarth'
import CrabYarn from './CrabYarn'
import Form from './Form'
import { useState } from 'react'

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('')

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlanet(event.target.value)
  }

  return (
    <>
      <CrabYarn />
      <Form
        selectedPlanet={selectedPlanet}
        handleSelectChange={handleSelectChange}
      />
      <PlanetEarth />
    </>
  )
}
