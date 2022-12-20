import Avatar from '@/modules/components/Avatar/Avatar'
import ContentfulRichText from '@/modules/contentful/Contentful/Contentful/ContentfulRichText'
import { getAbout } from '@/modules/utils/getAbout'

export default async function AboutIntroduction(): Promise<JSX.Element> {
  const data = await getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  return (
    <div className='space-y-4 flex flex-col w-full'>
      <div className='space-x-4 flex w-full'>
        <Avatar
          src={data.about.avatar.url}
          size='lg'
          width={data.about.avatar.width}
          height={data.about.avatar.height}
        />
        <div className='flex max-h-16 bg-white border-2 border-slate-100 rounded-full px-4 py-6 justify-center items-center w-full'>
          <p className='text-2xl text-center text-gray-700 font-bold'>
            {data.about.title}
          </p>
        </div>
      </div>
      <ContentfulRichText document={data.about.description.json} />
    </div>
  )
}
