'use client'
import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'
import { EMAIL } from '@/modules/constants'

export default function NavigationBar(): JSX.Element {
  return (
    <div className='fixed p-1 bottom-0 w-full flex'>
      <div className='flex w-full max-w-lg h-16 bg-black p-2 shadow-2xl border-white border rounded-xl justify-between items-center'>
        <div>
          <p className='text-white'>nav bar</p>
        </div>
        <ExternalLink href={`mailto:${EMAIL}`}>
          <Button className='bg-white rounded-lg text-black' size='sm'>
            Let's talk!
          </Button>
        </ExternalLink>
      </div>
    </div>
  )
}
