import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import { Dropdown } from 'ui/Dropdown/Dropdown'
import { Submenu } from 'ui/Submenu/Submenu'

import './Menu.scss'


const investorsAnimation = {
    hidden: {
        x: '-30px',
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}


export const Menu = () => {
    const [desktopMenu, setDesktopMenu] = useState(true)

    const getWindowSize = () => {
        console.log(window.innerWidth)
        if (window.innerWidth < 873) {
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

    const view = desktopMenu ? <DesktopMenu /> : <BurgerMenu />

    return (
        <>
            {view}
        </>
    )
}

const DesktopMenu = () => {

    return (
        <motion.ul className='menu__list'>
            <Submenu name='Ru FAQ'>
                <motion.li className="submenu__item">
                    <Link to='/welcome' className="submenu__link">Welcome to ECO</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to='/where-to-begin' className="submenu__link">С чего начать?</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/tokens" className="submenu__link">Tokens</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/tokens-claim" className="submenu__link">Claim токенов</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/discord" className="submenu__link">Discord сервер</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/discord-roles" className="submenu__link">Описание ролей в Discord</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Задания'>
                <motion.li className="submenu__item">
                    <Link to="/quests-active" className="submenu__link">Активные задания</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/quests-archive" className="submenu__link">Архив</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Governance'>
                <motion.li className="submenu__item">
                    <Link to="/community-managment" className="submenu__link">Управление сообществом</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/offers-and-votes" className="submenu__link">Подача редложений и голосование</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/accepted-offers" className="submenu__link">Принятые предложения</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/work-meets" className="submenu__link">Рабочие встречи</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/trustee" className="submenu__link">Trustee</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/monetary-policy" className="submenu__link">Monetary Policy</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Библиотека'>
                <motion.li className="submenu__item">
                    <Link to="/useful-links" className="submenu__link">Полезные ссылки</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/whitepaper" className="submenu__link">Whitepaper</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/AMA-records" className="submenu__link">Записи АМА</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Продукты ECO'>
                <motion.li className="submenu__item">
                    <Link to="/eco-app" className="submenu__link">ECO app</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/eco-debit-card" className="submenu__link">ECO debit card</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Archive'>
                <motion.li className="submenu__item">
                    <Link to="#" className="submenu__link">RU</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="#" className="submenu__link">EN</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="#" className="submenu__link">FR</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="#" className="submenu__link">KR</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="#" className="submenu__link">JP</Link>
                </motion.li>
            </Submenu>



            {/* <motion.li className="menu__list-item">
                <Link to="" className="menu__list-link">Ru FAQ</Link>
            </motion.li>
            <motion.li className="menu__list-item">
            <Link to="" className="menu__list-link">Активные задания</Link>
            </motion.li>
            <motion.li className="menu__list-item">
            <Link to="" className="menu__list-link">Governance</Link>
            </motion.li>
            <motion.li className="menu__list-item">
            <Link to="" className="menu__list-link">Библиотека</Link>
            </motion.li>
            <motion.li className="menu__list-item">
            <Link to="" className="menu__list-link">Продукты</Link>
            </motion.li>
            <motion.li className="menu__list-item">
            <Link to="" className="menu__list-link">Archive</Link>
            </motion.li> */}

            {/* <motion.li className="menu__list-item">
                <p className="menu__list-item">Ru FAQ</p> 
                <motion.ul className="menu__list-dropdown dropdown">
                    <motion.li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Welcome to ECO</Link>
                    </motion.li>
                    <motion.li className="dropdown__item">
                        <Link to="#" className="dropdown__link">С чего начать?</Link>
                    </motion.li>
                    <motion.li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Tokens</Link>
                    </motion.li>
                    <motion.li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Claim токенов</Link>
                    </motion.li>
                    <motion.li className="dropdown__item">
                        <Link to="#" className="dropdown__link">Discord сервер</Link>
                    </motion.li>
                </motion.ul>
            </motion.li> */}
        </motion.ul>
    )
}

const BurgerMenu = () => {
    const [menuActive, setMenuActive] = useState(false)

    useEffect(() => {
        if (menuActive) {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'hidden'
        } else {
            (document.querySelector('body') as HTMLBodyElement).style.overflow = 'scroll'
        }
    }, [menuActive])


    return (
        <>
            <div className={`backdrop ${menuActive ? 'active' : ''}`}
                onClick={() => setMenuActive(state => !state)}>
            </div>
            <nav className='burger-menu'>

                <div className={menuActive ? 'burger-menu__container active' : 'burger-menu__container'}
                    onClick={() => setMenuActive(state => !state)}>
                    <div
                        className={menuActive ? 'burger-menu__btn active' : 'burger-menu__btn'}>
                        <div className='burger-menu__decor top'></div>
                        <div className='burger-menu__decor bottom'></div>
                    </div>
                </div>
                <div
                    className={menuActive ? `burger-menu__list active` : `burger-menu__list`}>
                    {menuActive && <>
                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            className="burger-menu__title">Ru faq</motion.h3>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.1}>
                                <Link to="/welcome" className="burger-menu__link">Welcome to ECO</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.15}
                                className="burger-menu__item">
                                <Link to="/where-to-begin" className="burger-menu__link">С чего начать</Link>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.2}>
                                <Link to="/tokens" className="burger-menu__link">Tokens</Link>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.25}>
                                <Link to="/tokens-claim" className="burger-menu__link">Claim токенов</Link>
                            </motion.li>
                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.3}>
                                <Dropdown title='О дискорд сервере'>
                                    <div className="burger-menu__item">
                                        <Link to="/discord" className="burger-menu__link">Дискорд сервер</Link>
                                    </div>
                                    <div className="burger-menu__item">
                                        <Link to="/discord-roles" className="burger-menu__link">Описание ролей в дискорд</Link>
                                    </div>
                                </Dropdown>
                            </motion.li>
                        </motion.ul>



                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0.35}
                            className="burger-menu__title">Задания</motion.h3>
                        <motion.ul
                            className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li
                                className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.4}>
                                <Dropdown title='Задания'>
                                    <div className="burger-menu__item">
                                        <Link to="/quests-active" className="burger-menu__link">Активные задания</Link>
                                    </div>
                                    <div className="burger-menu__item">
                                        <Link to="/quests-archive" className="burger-menu__link">Архив заданий</Link>
                                    </div>
                                </Dropdown>
                            </motion.li>
                        </motion.ul>



                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0.45}
                            className="burger-menu__title">Governance</motion.h3>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.5}
                                className="burger-menu__item">
                                <Link to="/community-managment" className="burger-menu__link">Сообщество</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.55}
                                className="burger-menu__item">
                                <Dropdown title='Предложения и голосование'>
                                    <div className="burger-menu__item">
                                        <Link to="/offers-and-votes" className="burger-menu__link">Подача предложений и голосование</Link>
                                    </div>
                                    <div className="burger-menu__item">
                                        <Link to="/accepted-offers" className="burger-menu__link">Принятые предложения</Link>
                                    </div>
                                </Dropdown>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.6}
                                className="burger-menu__item">
                                <Link to="/work-meets" className="burger-menu__link">Рабочие встречи</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.65}
                                className="burger-menu__item">
                                <Link to="/trustee" className="burger-menu__link">Trustee</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.7}
                                className="burger-menu__item">
                                <Link to="/monetary-policy" className="burger-menu__link">Monetary Policy</Link>
                            </motion.li>
                        </motion.ul>



                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 1, once: true }}
                            variants={investorsAnimation}
                            custom={0.75}
                            className="burger-menu__title">Библиотека</motion.h3>
                        <motion.ul
                            className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.8}
                                className="burger-menu__item">
                                <Dropdown title='Полезные ссылки'>
                                    <div className="burger-menu__item">
                                        <Link to="/useful-links" className="burger-menu__link">Полезные ссылки</Link>
                                    </div>
                                    <div className="burger-menu__item">
                                        <Link to="/whitepaper" className="burger-menu__link">Whitepaper</Link>
                                    </div>
                                </Dropdown>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.85}
                                className="burger-menu__item">
                                <Link to="/AMA-records" className="burger-menu__link">Записи Ама</Link>
                            </motion.li>
                        </motion.ul>


                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            custom={0.9}
                            variants={investorsAnimation}
                            className="burger-menu__title">Продукты ECO</motion.h3>
                        <motion.ul
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            className="burger-menu__category">
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.95}
                                className="burger-menu__item">
                                <Link to="/Eco-app" className="burger-menu__link">ECO app</Link>
                            </motion.li>
                            <motion.li
                                variants={investorsAnimation}
                                custom={1}
                                className="burger-menu__item">
                                <Link to="/Eco-debit-card" className="burger-menu__link">Eco debit card</Link>
                            </motion.li>
                        </motion.ul>

                        {/* <h3 className="burger-menu__title">Archive</h3> */}
                        {/* <motion.ul className="burger-menu__category"> */}
                            {/* <motion.li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                            </Dropdown>
                        </motion.li>
                        <motion.li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                            </Dropdown>
                        </motion.li>
                        <motion.li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                            </Dropdown>
                        </motion.li>
                        <motion.li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                            </Dropdown>
                        </motion.li>
                        <motion.li className="burger-menu__item">
                            <Dropdown title='Полезные ссылки'>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Полезные ссылки</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                                <motion.li className="burger-menu__item">
                                    <Link to="" className="burger-menu__link">Whitepaper</Link>
                                </motion.li>
                            </Dropdown>
                        </motion.li> */}
                        {/* </motion.ul> */}
                    </>}

                </div>
            </nav>
        </>
    )
}