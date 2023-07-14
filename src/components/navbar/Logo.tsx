import Image from 'next/image'
import { FC } from 'react'

interface LogoProps {
    logoSrc: string | null
}

const Logo: FC<LogoProps> = ({ logoSrc }) => {
    return <div className='hidden lg:block relative z-10 max-w-max flex-1 items-center justify-center'>
        <Image
            src={logoSrc || ""}
            alt={''}
            width="75"
            height="50"
            className='rounded-2xl'
        />
    </div>
}

export default Logo