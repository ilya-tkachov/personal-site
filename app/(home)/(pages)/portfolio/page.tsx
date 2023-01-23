import { preload_getPortfolioCollection } from '@/modules/utils/getPortfolio'
import PortfolioCollectionList from './components/PortfolioCollectionList/PortfolioCollectionList'

// TODO searchParams undefined in production but exists in dev - wait for bug to be fixed

export const dynamic = 'force-dynamic'

export default async function Portfolio({ searchParams }) {
  preload_getPortfolioCollection(searchParams?.limit ?? '7')

  return (
    <div className='space-y-4 flex flex-col'>
      {/* @ts-expect-error Server Component */}
      <PortfolioCollectionList searchParams={searchParams} />
    </div>
  )
}
