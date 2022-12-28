import { getPortfolioCollection } from '@/modules/utils/getPortfolio'
import PortfolioCollectionLoadMore from '../PortfolioCollectionLoadMore/PortfolioCollectionLoadMore'
import PortfolioPreview from './PortfolioPreview/PortfolioPreview'

export default async function PortfolioCollectionList(
  props: any
): Promise<JSX.Element> {
  const data = await getPortfolioCollection('10')

  // TODO wait for Nextjs to fix searchParams bug so you can use load more component

  return (
    <div className='space-y-16 flex flex-col w-full'>
      {data.portfolioCollection.items.map((item: any) => (
        <PortfolioPreview
          key={item.sys.id}
          width={item.preview.width}
          height={item.preview.height}
          description={item.description.json}
          title={item.title}
          src={item.preview.url}
          tags={item.tags}
        />
      ))}
      <PortfolioCollectionLoadMore
        total={data.portfolioCollection.total}
        limit={data.portfolioCollection.limit}
      />
    </div>
  )
}
