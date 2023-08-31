import request from 'superagent'

export async function getPlanet() {
  const response = await request.get('/api/v1/planet')

  return response.body
}

// TODO: grab crabs from db
