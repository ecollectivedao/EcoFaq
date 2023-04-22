import { Menu } from 'containers/Menu/Menu'
import {ThemeSwitcher} from '../'
import {Dropdown, Logo, Select} from 'ui'

import ukraine from 'assets/img/Ukraine.png'


import './Header.scss'

export const Header = () => {
    return (
       <header className='header'>
            <div className="header__container container">
                        <Logo/>
                        <Menu/>
        
                        <ThemeSwitcher/>
                    {/* <a className='header__btn'>Войти</a> */}
                </div>
       </header>
    )
}