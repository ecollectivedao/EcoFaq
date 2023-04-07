import { useState } from 'react'
import {Link} from 'react-router-dom'

import { Dropdown } from 'ui/Dropdown/Dropdown'
import { Submenu } from 'ui/Submenu/Submenu'

import './Menu.scss'

export const DesktopMenu = () => {


    return (
        <ul className='menu__list'>
            <Submenu name='Ru FAQ'>
                <li className="submenu__item">
                    <Link to='/welcome' className="submenu__link">Welcome to ECO</Link>
                </li>
                <li className="submenu__item">
                    <Link to='/where-to-begin' className="submenu__link">С чего начать?</Link>
                </li>
                <li className="submenu__item">
                    <Link to="/tokens" className="submenu__link">Tokens</Link>
                </li>
                <li className="submenu__item">
                    <Link to="/tokens-claim" className="submenu__link">Claim токенов</Link>
                </li>
                <li className="submenu__item">
                    <Link to="/discord" className="submenu__link">Discord сервер</Link>
                </li>
            </Submenu>

            <Submenu name='Задания'>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Активные задания</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Архив</Link>
                </li>
            </Submenu>

            <Submenu name='Governance'>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Управление сообществом</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Предложения</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Рабочие встречи</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Trustee</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Monetary Policy</Link>
                </li>
            </Submenu>

            <Submenu name='Библиотека'>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Welcome to ECO</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">С чего начать?</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Tokens</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Claim токенов</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Discord сервер</Link>
                </li>
            </Submenu>

            <Submenu name='Продукты ECO'>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Welcome to ECO</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">С чего начать?</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Tokens</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Claim токенов</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Discord сервер</Link>
                </li>
            </Submenu>

            <Submenu name='Archive'>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Welcome to ECO</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">С чего начать?</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Tokens</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Claim токенов</Link>
                </li>
                <li className="submenu__item">
                    <Link to="#" className="submenu__link">Discord сервер</Link>
                </li>
            </Submenu>
            


            {/* <li className="menu__list-item">
                <Link to="" className="menu__list-link">Ru FAQ</Link>
            </li>
            <li className="menu__list-item">
            <Link to="" className="menu__list-link">Активные задания</Link>
            </li>
            <li className="menu__list-item">
            <Link to="" className="menu__list-link">Governance</Link>
            </li>
            <li className="menu__list-item">
            <Link to="" className="menu__list-link">Библиотека</Link>
            </li>
            <li className="menu__list-item">
            <Link to="" className="menu__list-link">Продукты</Link>
            </li>
            <li className="menu__list-item">
            <Link to="" className="menu__list-link">Archive</Link>
            </li> */}

            {/* <li className="menu__list-item">
                <p className="menu__list-item">Ru FAQ</p> 
                <ul className="menu__list-dropdown dropdown">
                    <li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Welcome to ECO</Link>
                    </li>
                    <li className="dropdown__item">
                        <Link to="#" className="dropdown__link">С чего начать?</Link>
                    </li>
                    <li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Tokens</Link>
                    </li>
                    <li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Claim токенов</Link>
                    </li>
                    <li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Discord сервер</Link>
                    </li>
                </ul>
            </li> */}
            {/* <li className="menu__list-item">Активные задания</li>
            <li className="menu__list-item">Governance</li>
            <li className="menu__list-item">Библиотека</li>
            <li className="menu__list-item">Продукты СЕО</li>
            <li className="menu__list-item">Archive</li> */}
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
                            <Link to="" className="burger-menu__link">Welcome to ECO</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">С чего начать</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Tokens</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Claim токенов</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='О дискорд сервере'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Дискорд сервер</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Описание ролей в дискорд</Link>
                                </li>
                            </Dropdown>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Задания</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Dropdown title='Задания'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Активные задания</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Архив заданий</Link>
                                </li>
                            </Dropdown>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Governance</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Управление сообществом</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Задания'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Активные задания</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Архив заданий</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Рабочие встречи</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Trustee</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Monetary Policy</Link>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Библиотека</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Записи Ама</Link>
                        </li>
                    </ul>


                    <h3 className="burger-menu__title">Продукты ECO</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">ECO app</Link>
                        </li>
                        <li className="burger-menu__item">
                            <Link to="" className="burger-menu__link">Eco debit card</Link>
                        </li>
                    </ul>

                    <h3 className="burger-menu__title">Archive</h3>
                    <ul className="burger-menu__category">
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                        <li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                                <li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </li>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}