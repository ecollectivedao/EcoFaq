import { BurgerMenu } from 'containers/Menu/Menu'

import './Header.scss'

export const Header = () => {
    return (
       <header className='header'>
            <div className="header__container container">
                    <div className="header__logo">
                        <img src="" alt="logotype" />
                    </div>
                        <BurgerMenu/>
                </div>
       </header>
    )
}