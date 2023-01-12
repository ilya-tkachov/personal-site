import { preload_getAbout } from '@/modules/utils/getAbout'
import AboutIntroduction from './components/AboutIntroduction/AboutIntroduction'
import AboutLinks from './components/AboutLinks/AboutLinks'
import AboutRoutes from './components/AboutRoutes/AboutRoutes'

export default function Home() {
  preload_getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  return (
    <div className='space-y-16 flex flex-col pb-8'>
      {/* @ts-expect-error Server Component */}
      <AboutIntroduction />
      <AboutLinks />
      <AboutRoutes />
    </div>
  )
}
