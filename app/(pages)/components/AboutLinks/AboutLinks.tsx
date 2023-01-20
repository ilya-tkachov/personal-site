import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'
import { EMAIL, GITHUB, LINKEDIN } from '@/modules/constants'
import { GithubIcon, LinkedInIcon } from 'assets/icons'

export default function AboutLinks(): JSX.Element {
  return (
    <div className='flex flex-col w-full space-y-8 items-center justify-center'>
      <ExternalLink className='w-full' href={`mailto:${EMAIL}`}>
        <Button
          variant='outline'
          className='border-white w-full rounded-xl text-white'
          size='lg'
        >
          Let's talk!
        </Button>
      </ExternalLink>
      <div className='space-x-8 flex items-center'>
        <ExternalLink href={LINKEDIN}>
          <LinkedInIcon className='w-8 h-8 fill-white' />
        </ExternalLink>
        <ExternalLink href={GITHUB}>
          <GithubIcon className='w-8 h-8 fill-white' />
        </ExternalLink>
      </div>
    </div>
  )
}
