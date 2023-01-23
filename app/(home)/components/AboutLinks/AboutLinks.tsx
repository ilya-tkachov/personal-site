import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'
import { EMAIL, GITHUB, LINKEDIN } from '@/modules/constants'
import { GithubIcon, LinkedInIcon } from 'assets/icons'

export default function AboutLinks(): JSX.Element {
  const iconProps = 'w-12 h-12 fill-white border border-white p-2 rounded-xl'

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
          <LinkedInIcon className={iconProps} />
        </ExternalLink>
        <ExternalLink href={GITHUB}>
          <GithubIcon className={iconProps} />
        </ExternalLink>
      </div>
    </div>
  )
}
