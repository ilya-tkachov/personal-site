import { getPortfolioCollection } from '@/modules/utils/getPortfolio'
import PortfolioCollectionLoadMore from '../PortfolioCollectionLoadMore/PortfolioCollectionLoadMore'
import PortfolioPreview from './PortfolioPreview/PortfolioPreview'

export default async function PortfolioCollectionList(
  props
): Promise<JSX.Element> {
  const { searchParams } = props

  const data = await getPortfolioCollection(searchParams.limit ?? 5)

  return (
    <div className="space-y-8 flex flex-col w-full">
      {data.portfolioCollection.items.map((item) => (
        <PortfolioPreview
          key={item.sys.id}
          width={item.preview.width}
          height={item.preview.height}
          description={item.description.json}
          title={item.title}
          src={item.preview.url}
        />
      ))}
      <PortfolioCollectionLoadMore
        total={data.portfolioCollection.total}
        limit={data.portfolioCollection.limit}
      />
    </div>
  )
}
