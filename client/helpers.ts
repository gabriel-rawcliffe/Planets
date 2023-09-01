import { Planet } from '../models/planets'
import { Crab } from '../models/Crab'

export function distanceInCrabs(planet: Planet, crab: Crab) {
  // planet.distance in light years converted to m
  // planet.distnace in m / crab.length
  const crabDistance: number =
    (planet.distance_light_year * (9.461 * Math.pow(10, 15))) / crab.length
  return crabDistance.toExponential()
}

export function planetMassInCrabs(planet: Planet, crab: Crab): string {
  // mass is returned as a proportion of Jupiters mass, so convert mass into kg
  //convert into crabs
  console.log(planet.mass)
  console.log(crab.mass)
  const crabMass: number =
    (planet.mass * (1.899 * Math.pow(10, 27))) / crab.mass
  console.log(crabMass)
  return crabMass.toExponential()
}

export function oritalPeriodInCrabs(planet: Planet, crab: Crab) {
  const crabOrbitPeriod: number = planet.period / crab.lifetime
  return crabOrbitPeriod
}

// const testPlanet = {
//   name: 'Mars',
//   mass: 0.000338,
//   radius: 0.0488,
//   period: 687,
//   semi_major_axis: 1.542,
//   temperature: 210,
//   distance_light_year: 0.000037,
//   host_star_mass: 1,
//   host_star_temperature: 6000,
// }

// const testCrab = {
//   species: 'test crab',
//   mass: 0.1,
//   length: 0.1,
//   description: 'a wee crab',
// }
