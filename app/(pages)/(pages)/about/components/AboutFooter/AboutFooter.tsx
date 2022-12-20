import Button from '@/modules/components/Button/Button'
import ExternalLink from '@/modules/components/ExternalLink/ExternalLink'

export default function AboutFooter(): JSX.Element {
  return (
    <div className="space-y-2 flex flex-col w-full items-center">
      <ExternalLink className="w-full" href="mailto:ilya.tkachov@hotmail.com">
        <Button
          className="bg-indigo-400 w-full rounded-full text-indigo-50"
          size="lg"
        >
          Let's talk!
        </Button>
      </ExternalLink>
      <ExternalLink href="https://www.linkedin.com/in/ilyatkachov/">
        <Button
          className="bg-transparent rounded-full text-indigo-400"
          size="sm"
          variant="link"
        >
          Connect on LinkedIn
        </Button>
      </ExternalLink>
    </div>
  )
}
