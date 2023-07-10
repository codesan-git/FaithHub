import getArticles from '@/action/getArticles'
import Articles from '@/components/articles/Articles'
import Hero from '@/components/hero/Hero'

export default async function Home() {
  const heroImage = "https://media.tenor.com/lXSv1AxSvMkAAAAd/pemandangan-scenery.gif"
  const getArticle = await getArticles()

  return (
    <>
      <Hero heroImage={heroImage} />
      <div className='flex gap-4 my-4'>
          {getArticle.map((data: any) => (
            <Articles
              key={data.id}
              ArticlesData={data}
              image={data.image}
              body={data.author.name}
              title={data.title}
            />
          ))}
      </div>
    </>
  )
}
