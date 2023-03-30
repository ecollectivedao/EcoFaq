import { useState } from 'react'

import { Dropdown } from 'ui/Dropdown/Dropdown'

import './Menu.scss'

export const DesktopMenu = () => {

    return (
        <ul className='menu__list'>
            {/* li* */}
        </ul>
    )
}

export const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false)

    return (
        <>
            <div className={`backdrop ${menuActive ? 'active' : ''}`}
                onClick={() => setMenuActive(state => !state)}></div>
            <nav className='burger-menu'>
                <div className={menuActive ? 'burger-menu__container active' : 'burger-menu__container'}
                    onClick={() => setMenuActive(state => !state)}>
                    <div
                        className={menuActive ? 'burger-menu__btn active' : 'burger-menu__btn'}>
                        <div className='burger-menu__decor top'></div>
                        <div className='burger-menu__decor bottom'></div>
                    </div>
                </div>
                <div className={menuActive ? `burger-menu__list active` : `burger-menu__list`}>

                    <h3 className="burger-menu__title">Ru faq</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Welcome to ECO</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">С чего начать</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Tokens</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Claim токенов</a>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='О дискорд сервере'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Дискорд сервер</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Описание ролей в дискорд</a>
                                </li>
                            </Dropdown>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Задания</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Dropdown title='Задания'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Активные задания</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Архив заданий</a>
                                </li>
                            </Dropdown>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Governance</h3>
                    <ul className="burger-menu__category">
                    <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Управление сообществом</a>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Задания'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Активные задания</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Архив заданий</a>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Рабочие встречи</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Trustee</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Monetary Policy</a>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Библиотека</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Записи Ама</a>
                        </li>
                    </ul>


                    <h3 className="burger-menu__title">Продукты ECO</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">ECO app</a>
                        </li>
                        <li className="burger-menu__item">
                            <a href="" className="burger-menu__link">Eco debit card</a>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Archive</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                        <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                        </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                        <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                        </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                        <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                        </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                        <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                        </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                        <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Полезные ссылки</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                                <li className="burger-menu__item">
                                    <a href="" className="burger-menu__link">Whitepaper</a>
                                </li>
                        </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}