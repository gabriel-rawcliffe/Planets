import request from 'superagent'

export async function getPlanet(planet: string) {
  const response = await request.get(`/api/v1/planets/${planet}`)

  return response.body
}

export async function getCrabs() {
  const response = await request.get(`/api/v1/crabs/`)

  return response.body
}

// TODO: grab crabs from db
