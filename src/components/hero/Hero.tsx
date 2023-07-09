'use client'
import Image from 'next/image'
import { FC } from 'react'

interface HeroProps {
    heroImage: string
}

const Hero: FC<HeroProps> = ({ heroImage }) => {
    return <>
        <div>
            <div className='relative flex mx-auto my-auto justify-center items-center'>
                <div className='absolute flex flex-col  z-10 w-96 h-96 mx-auto justify-center items-center text-center'>
                    <h1 className='mb-5 text-5xl font-bold text-orange-200'>Hello there</h1>
                    <p className='mb-5 text-orange-200'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className='px-5 py-2 font-medium text-orange-200 border border-b-4 border-r-4 border-orange-300 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2'>Button</button>
                </div>
                <Image
                    src={heroImage}
                    alt=''
                    width={1500}
                    height={1500}
                    className='object-center object-fill w-full h-[36rem] mx-auto rounded-lg brightness-50 opacity-80'
                />
                {/* <span className='fixed'> */}
                {/* </span> */}
            </div>
        </div>
    </>
}

export default Hero