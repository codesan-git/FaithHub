import Hero from '@/components/hero/Hero'
import Image from 'next/image'

export default function Home() {
  const heroImage = "https://media.tenor.com/lXSv1AxSvMkAAAAd/pemandangan-scenery.gif"
  return (
    <>
      <Hero heroImage={heroImage} />
    </>
  )
}
