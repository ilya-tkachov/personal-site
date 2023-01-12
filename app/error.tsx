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
      <div className='flex items-center justify-center space-y-8 flex-col w-full h-64'>
        <div className=' bg-red-500 rounded-full w-6 h-6' />
        <Button
          className='bg-red-500 rounded-full text-red-50'
          size='md'
          onClick={() => reset()}
        >
          Retry
        </Button>
      </div>
    </PageContainer>
  )
}
