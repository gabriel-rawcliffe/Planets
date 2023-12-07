import Tagline from './Tagline'
import CrabYarn from './CrabYarn'
import Form from './Form'
import { useState } from 'react'
import PlanetOther from './PlanetOther'
import PlanetEarth from './PlanetEarth'
import CrabForm from './CrabForm'

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury')

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
      <CrabForm />
      <div className="planets">
        <PlanetEarth />
        <PlanetOther name={selectedPlanet} />
      </div>
    </>
  )
}
