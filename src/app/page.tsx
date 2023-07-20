import getArticles from '@/action/getArticles'
import Articles from '@/components/articles/Articles'
import Hero from '@/components/hero/Hero'
import { ScrollArea } from '@/components/ui/scroll-area'

export default async function Home() {
  const heroImage = "https://media.tenor.com/lXSv1AxSvMkAAAAd/pemandangan-scenery.gif"
  const getArticle = await getArticles()

  return (
    <main>
      <Hero heroImage={heroImage} />
      <ScrollArea className='h-full w-full rounded-md p-4'>
      <div className='group flex gap-4 my-4'>
        {getArticle.map((data: any) => (
          <div key={data.id} className='flex mx-auto items-center'>
            <Articles
              ArticlesData={data}
              image={data.image}
              body={data.author.name}
              title={data.title}
            />
          </div>
        ))}
      </div>
      </ScrollArea>
    </main>
  )
}
