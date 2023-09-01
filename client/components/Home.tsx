import CrabYarn from './CrabYarn'
import Form from './Form'
import PlanetOther from './PlanetOther'

export default function Home() {
  return (
    <>
      <CrabYarn />
      <Form />
      <PlanetOther name={'Neptune'} />
    </>
  )
}
