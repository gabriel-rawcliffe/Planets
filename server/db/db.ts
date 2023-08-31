import connection from './connection.ts'

export function getCrabs() {
  return connection('crabs').select()
}
