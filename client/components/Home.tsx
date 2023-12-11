import PageIntro from './PageIntro'
import Form from './Form'
import { useState } from 'react'
import PlanetTwo from './PlanetTwo'
import PlanetOne from './PlanetOne'

export default function Home() {
  const [selectedPlanet, setSelectedPlanet] = useState('Mercury')

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPlanet(event.target.value)
  }

  return (
    <>
      <PageIntro />
      <Form
        selectedPlanet={selectedPlanet}
        handleSelectChange={handleSelectChange}
      />

      <div className="planets">
        <PlanetOne />
        <PlanetTwo name={selectedPlanet} />
      </div>
    </>
  )
}
