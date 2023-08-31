import { Route, createRoutesFromElements } from 'react-router-dom'

import App from './components/App'
import Home from './components/Home'
import PlanetDetails from './components/PlanetDetails'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="/planetdetails" element={<PlanetDetails />} />
  </Route>
)
