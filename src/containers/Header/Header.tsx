import { BurgerMenu, DesktopMenu } from 'containers/Menu/Menu'

import './Header.scss'

export const Header = () => {
    return (
       <header className='header'>
            <div className="header__container container">
                    <div className="header__logo">
                        <img src="" alt="logotype" />
                    </div>
                        {/* <BurgerMenu/> */}
                        <DesktopMenu/>
                    <button className='header__btn'>Sign in</button>
                </div>
       </header>
    )
}