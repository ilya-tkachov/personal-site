import PageContainer from '@/modules/components/PageContainer/PageContainer'
import useThemeConfig from '@/modules/hooks/useThemeConfig'

export default function Loading() {
  const config = useThemeConfig()

  return (
    <PageContainer>
      <div className="flex fixed items-center justify-center space-y-4 flex-col w-full h-64 bottom-0">
        <div className="ring-indigo-200 bg-indigo-400 rounded-full ring-4 w-6 h-6" />
      </div>
    </PageContainer>
  )
}
