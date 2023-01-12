import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'
import { EMAIL, GITHUB, LINKEDIN } from '@/modules/constants'

export default function AboutLinks(): JSX.Element {
  return (
    <div className='space-y-2 flex flex-col w-full items-center'>
      <ExternalLink className='w-full' href={`mailto:${EMAIL}`}>
        <Button className='bg-white w-full rounded-full text-black' size='lg'>
          Let's talk!
        </Button>
      </ExternalLink>
      <div className='space-x-2 flex items-center'>
        <ExternalLink href={LINKEDIN}>
          <Button
            className='bg-transparent rounded-full text-white/75'
            size='sm'
            variant='link'
          >
            Connect on LinkedIn
          </Button>
        </ExternalLink>
        <ExternalLink href={GITHUB}>
          <Button
            className='bg-transparent rounded-full text-white/75'
            size='sm'
            variant='link'
          >
            Github
          </Button>
        </ExternalLink>
      </div>
    </div>
  )
}
