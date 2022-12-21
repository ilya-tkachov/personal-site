'use client'
import Button from '@/modules/components/Button/Button'
import Spinner from '@/modules/components/Spinner/Spinner'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useTransition } from 'react'

interface Props {
  limit: number
  total: number
}

export default function PortfolioCollectionLoadMore(props: Props): JSX.Element {
  const { limit, total } = props

  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const observerRef = useRef(null)

  // load more function
  const onLoadMore = (): void => {
    const loadMoreAmount = 10
    const decideLimit =
      limit + loadMoreAmount >= total ? total : limit + loadMoreAmount
    startTransition(() => {
      router.replace(`/portfolio?limit=${decideLimit}`)
    })
  }

  // load more when observing the load more button
  useEffect(() => {
    const callbackFn = (entries): void => {
      const [entry] = entries
      if (entry.isIntersecting) {
        onLoadMore()
      }
    }

    const observer = new IntersectionObserver(callbackFn)
    if (observerRef.current != null) {
      observer.observe(observerRef.current)
    }
    return () => {
      if (observerRef.current != null) {
        observer.unobserve(observerRef.current)
      }
    }
  }, [observerRef, onLoadMore])

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
    <div ref={observerRef} className="flex w-full h-24 items-center justify-center">
      <Button className='bg-gray-300 text-slate-50 rounded-full' size='md' onClick={onLoadMore} disabled={isPending}>
        Load More
      </Button>
    </div>
  )
}
