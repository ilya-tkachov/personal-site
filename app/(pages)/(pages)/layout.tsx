'use client'
import PageContainer from '@/modules/components/PageContainer/PageContainer'
import PageContents from '@/modules/components/PageContents/PageContents'
import PageHeader from './components/PageHeader/PageHeader'

import PageBlur from '@/modules/components/PageBlur/PageBlur'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export default function PagesLayout(props: Props) {
  const { children } = props

  return (
    <>
      <PageBlur />
      <PageContainer>
        <PageContents>
          <PageHeader />
        </PageContents>
        <PageContents>{children}</PageContents>
      </PageContainer>
    </>
  )
}
