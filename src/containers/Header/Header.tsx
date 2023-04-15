import { Menu } from 'containers/Menu/Menu'
import {Logo} from 'ui'

import './Header.scss'

export const Header = () => {
    return (
       <header className='header'>
            <div className="header__container container">
                        <Logo/>
                        {/* <BurgerMenu/> */}
                        <Menu/>
                    <a className='header__btn'>Войти</a>
                </div>
       </header>
    )
}