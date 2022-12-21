import Avatar from '@/modules/components/Avatar/Avatar'
import ContentfulRichText from '@/modules/contentful/Contentful/Contentful/ContentfulRichText'
import { getAbout } from '@/modules/utils/getAbout'

export default async function AboutIntroduction(): Promise<JSX.Element> {
  const data = await getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  return (
    <div className='space-y-4 flex flex-col w-full'>
      <div className='w-full flex justify-center items-center'>
        <Avatar
          src={data.about.avatar.url}
          size='2xl'
          width={data.about.avatar.width}
          height={data.about.avatar.height}
        />
      </div>
      <p className='text-4xl text-gray-700 font-bold'>
        {data.about.title}
      </p>
      <ContentfulRichText document={data.about.description.json} />
    </div>
  )
}
