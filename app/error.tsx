"use client"

import { useEffect } from "react"

interface Props {
  error: Error
  reset: () => void
}

export default function Error(props: Props) {
  const { error, reset } = props

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset</button>
    </div>
  )
}
