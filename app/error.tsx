'use client'

import Button from '@/modules/components/Button/Button'
import PageContainer from '@/modules/components/PageContainer/PageContainer'
import { useEffect } from 'react'

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
    <PageContainer>
      <div className="flex fixed items-center justify-center space-y-8 flex-col w-full h-64 bottom-0">
        <Button
          className="bg-rose-400 rounded-full text-rose-50"
          size="lg"
          onClick={() => reset()}
        >
          Retry
        </Button>
        <div className="ring-rose-200 bg-rose-400 rounded-full ring-4 w-6 h-6" />
      </div>
    </PageContainer>
  )
}
