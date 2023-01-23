'use client'
import PageContents from '@/modules/components/PageContents/PageContents'
import { ReactNode } from 'react'
import PageHeader from './components/PageHeader/PageHeader'

interface Props {
  children: ReactNode
}

export default function PagesLayout(props: Props) {
  const { children } = props

  return (
    <PageContents>
      <div className='space-y-8 flex flex-col h-min-full'>
        <PageHeader />
        {children}
      </div>
    </PageContents>
  )
}
