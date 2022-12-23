import { preload_getPortfolioCollection } from "@/modules/utils/getPortfolio"
import PortfolioCollectionList from "./components/PortfolioCollectionList/PortfolioCollectionList"

export default async function Portfolio(props) {
  const { searchParams } = props

  preload_getPortfolioCollection(searchParams.limit ?? 5)

  return (
    <div className="space-y-4 flex flex-col">
      {/* @ts-expect-error Server Component */}
      <PortfolioCollectionList searchParams={searchParams} />
    </div>
  )
}
