'use client'

import { useRouter } from 'next/navigation'

export default function PageBlur(): JSX.Element {
  const router = useRouter()

  const onClick = (): void => {
    router.push('/')
  }

  return (
    <div
      onClick={onClick}
      className="backdrop-blur-sm fixed top-0 left-0 right-0 bottom-0"
    />
  )
}
