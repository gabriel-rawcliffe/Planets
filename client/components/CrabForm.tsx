import React, { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { getCrabs } from '../apis/apiClient'

export default function CrabForm() {
  // const crabs = await getCrabs()
  // console.log(`crabs: ${crabs}`)
  const [crab, setCrab] = useState('King Crab')
  const {
    data: crabs,
    error,
    isLoading,
  } = useQuery(['crabs'], () => {
    const crabs = ['King crab', 'Ghost crab', 'Spider crab', 'Fiddler crab']
    return crabs
  })

  if (error) {
    return `Could not load crabs`
  }

  if (isLoading) {
    return <>...Loading crabs</>
  }

  const handleCrabChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCrab(event.target.value)
  }

  return (
    <form>
      <label>
        <select value={crab} onChange={handleCrabChange}>
          {crabs?.map((crab) => (
            <option key={crab} value={crab}>
              {crab}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}
