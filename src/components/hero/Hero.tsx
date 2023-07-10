'use client'
import { motion, AnimatePresence, transform } from 'framer-motion'
import Image from 'next/image'
import { FC } from 'react'


interface HeroProps {
    heroImage: string
}


const Hero: FC<HeroProps> = ({ heroImage }) => {
    return <>
        <AnimatePresence>
            <div>
                <div className='relative flex mx-auto my-auto justify-center items-center'>
                    <motion.div className='absolute flex flex-col  z-10 w-96 h-96 mx-auto justify-center items-center text-center'
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        translate='yes'
                    >
                        <h1 className='mb-5 text-5xl font-bold text-orange-200'>Hello there</h1>
                        <p className='mb-5 text-orange-200'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className='px-5 py-2 font-medium text-orange-200 border border-b-4 border-r-4 border-orange-300 rounded-lg shadow-lg hover:shadow-sm hover:border-b-2 hover:border-r-2'>Button</button>
                    </motion.div>
                    <Image
                        src={heroImage}
                        alt=''
                        width={1500}
                        height={1500}
                        className='object-center object-fill w-full h-[36rem] mx-auto rounded-lg brightness-50 opacity-80'
                    />
                </div>
            </div>
        </AnimatePresence>
    </>
}

export default Hero