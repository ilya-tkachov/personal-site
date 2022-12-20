'use client'
import Button from '@/modules/components/Button/Button'
import Spinner from '@/modules/components/Spinner/Spinner'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

interface Props {
  limit: number
  total: number
}

export default function PortfolioCollectionLoadMore(props: Props): JSX.Element {
  const { limit, total } = props

  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const onClick = (): void => {
    const loadMoreAmount = 10
    const decideLimit =
      limit + loadMoreAmount >= total ? total : limit + loadMoreAmount
    startTransition(() => {
      router.replace(`/portfolio?limit=${decideLimit}`)
    })
  }

  if (limit >= total) {
    return <div className="flex w-full h-24 items-center justify-center" />
  }

  if (isPending) {
    return (
      <div className="flex w-full h-24 items-center justify-center">
        <Spinner size="sm" />
      </div>
    )
  }

  return (
    <div className="flex w-full h-24 items-center justify-center">
      <Button onClick={onClick} disabled={isPending}>
        load more
      </Button>
    </div>
  )
}
