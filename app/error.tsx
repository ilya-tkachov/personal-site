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
      <div className='flex items-center justify-center flex-col w-full h-64'>
        <Button
          className='bg-orange-400 rounded-full text-orange-50'
          size='md'
          onClick={() => reset()}
        >
          Retry
        </Button>
      </div>
    </PageContainer>
  )
}
