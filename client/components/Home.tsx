import Tagline from './Tagline'
import CrabYarn from './CrabYarn'
import Form from './Form'
import { useState } from 'react'
import PlanetOther from './PlanetOther'

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('')

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlanet(event.target.value)
  }

  return (
    <>
      <Tagline />
      <CrabYarn />
      <Form
        selectedPlanet={selectedPlanet}
        handleSelectChange={handleSelectChange}
      />
      <PlanetEarth />
      <PlanetOther />
    </>
  )
}
