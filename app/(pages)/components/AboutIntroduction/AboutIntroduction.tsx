import Avatar from '@/modules/components/Avatar/Avatar'
import ContentfulRichText from '@/modules/contentful/Contentful/Contentful/ContentfulRichText'
import { avatarSizes } from '@/modules/theme/avatar'
import { getAbout } from '@/modules/utils/getAbout'

export default async function AboutIntroduction(): Promise<JSX.Element> {
  const data = await getAbout('13zjl7d9SPh4EZ7vYYLkKa')

  const avatarSize = 'xl'
  const getAvatarSize = avatarSizes[avatarSize]

  return (
    <div className='space-y-16 flex flex-col w-full'>
      <div className='w-full flex items-center justify-between'>
        <div className='max-w-[200px]'>
          <p className='text-4xl text-white font-thin'>{data.about.title}</p>
          <p className='text-8xl text-white font-bold'>{data.about.name}</p>
        </div>
        <div className='relative'>
          <div className={`${getAvatarSize} border relative rounded-3xl`} />
          <Avatar
            src={data.about.avatar.url}
            size={avatarSize}
            width={data.about.avatar.width}
            height={data.about.avatar.height}
            className={'border border-white absolute right-4 top-4'}
          />
        </div>
      </div>
      <div className='space-y-8'>
        <ContentfulRichText
          document={data.about.description.json}
          className='text-2xl'
        />
      </div>
    </div>
  )
}
