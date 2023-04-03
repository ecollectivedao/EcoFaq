import { BurgerMenu, DesktopMenu } from 'containers/Menu/Menu'

import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
       <header className='header'>
            <div className="header__container container">
                    <div className="header__logo">
                        <Link to='/'>
                            <img src="" alt="logotype" />
                        </Link>
                    </div>
                        {/* <BurgerMenu/> */}
                        <DesktopMenu/>
                    <a className='header__btn'>Войти</a>
                </div>
       </header>
    )
}