import { FC } from 'react'
import Logo from './Logo'
import { Menu } from './Menu'
import Container from './Container'
import { Profile } from './Profile'
import { ThemeChanger } from '../themes/Themechanger'

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = ({ }) => {
    const logoSrc = "https://png.pngtree.com/png-vector/20191010/ourmid/pngtree-orange-logo-illustration-design-png-image_1811426.jpg"
    return <>
        {/* web view */}
        <Container>
            <div className='flex justify-between'>
                <div className='flex py-5 px-5 z-50 gap-4'>
                    <Logo logoSrc={logoSrc} />
                    <Menu />
                </div>
                <div className='flex py-5 px-5 z-50 gap-x-4 my-auto'>
                    <ThemeChanger />
                    <Profile />
                </div>
            </div>
        </Container>
    </>
}

export default Navbar