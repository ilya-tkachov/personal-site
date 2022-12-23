import PageContainer from "@/modules/components/PageContainer/PageContainer"
import Spinner from "@/modules/components/Spinner/Spinner"

export default function Loading() {
  return (
    <PageContainer>
      <div className="flex items-center justify-center space-y-4 flex-col w-full h-64">
        <Spinner size="md" />
      </div>
    </PageContainer>
  )
}
