import { preload_getAbout } from '@/modules/utils/getAbout'
import AboutFooter from './components/AboutFooter/AboutFooter'
import AboutIntroduction from './components/AboutIntroduction/AboutIntroduction'

export default async function About() {
  preload_getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  return (
    <div className='space-y-4 flex flex-col'>
      {/* @ts-expect-error Server Component */}
      <AboutIntroduction />
      <AboutFooter />
    </div>
  )
}
