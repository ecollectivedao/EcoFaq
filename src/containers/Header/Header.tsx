import { Menu } from 'containers/Menu/Menu'
import { ThemeSwitcher } from '../'
import { Logo } from 'ui'

import { Link } from 'react-scroll'



import './Header.scss'
import { useState, useEffect } from 'react'

export const Header = () => {

    const [desktopMenu, setDesktopMenu] = useState(true)

    const getWindowSize = () => {
        if (window.innerWidth < 1125) {
            setDesktopMenu(false)
        } else {
            setDesktopMenu(true)
        }
    }

    useEffect(() => {
        getWindowSize()
    }, []);

    useEffect(() => {
        window.addEventListener('resize', getWindowSize);

        return () => {
            window.removeEventListener('resize', getWindowSize);
        };
    }, [desktopMenu]);

    return (
        <header className='header'>
            <div className="header__container container">
                <Logo />
                <Menu />

                <Link
                    to="join-us"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="header__button">
                    Присоединяйся
                </Link>

                {desktopMenu ? <ThemeSwitcher /> : null}
            </div>
        </header>
    )
}