import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'
import { EMAIL, LINKEDIN } from '@/modules/constants'

export default function AboutFooter(): JSX.Element {
  return (
    <div className="space-y-2 flex flex-col w-full items-center pb-8">
      <ExternalLink className="w-full" href={`mailto:${EMAIL}`}>
        <Button
          className="bg-indigo-400 w-full rounded-full text-indigo-50"
          size="lg"
        >
          Let's talk!
        </Button>
      </ExternalLink>
      <ExternalLink href={LINKEDIN}>
        <Button
          className="bg-transparent rounded-full text-slate-300"
          size="sm"
          variant="link"
        >
          Connect on LinkedIn
        </Button>
      </ExternalLink>
    </div>
  )
}
