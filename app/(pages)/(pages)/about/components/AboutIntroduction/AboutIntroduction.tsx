import Avatar from '@/modules/components/Avatar/Avatar'
import { getAbout } from '@/modules/utils/getAbout'

export default async function AboutIntroduction(): Promise<JSX.Element> {
  const data = await getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  return (
    <div className='space-y-4 flex flex-col w-full'>
      <div className='flex max-h-24 bg-white ring-2 ring-slate-900 rounded-full p-4 justify-center items-center w-full'>
        <p className='text-2xl text-center text-gray-900'>
          {data.about.title}
        </p>
      </div>
      <div className='space-x-4 flex w-full'>
        <Avatar
          src={data.about.avatar.url}
          size='xl'
          width={data.about.avatar.width}
          height={data.about.avatar.height}
        />
      </div>
    </div>
  )
}
