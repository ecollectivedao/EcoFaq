import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


import { Dropdown } from 'ui/Dropdown/Dropdown'
import { Submenu } from 'ui/Submenu/Submenu'

import './Menu.scss'
import { ThemeSwitcher } from 'containers/ThemeSwitcher/ThemeSwitcher'


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
            <Submenu name='О проекте ECO'>
                <motion.li className="submenu__item">
                    <Link to='/welcome' className="submenu__link">Что такое ECO?</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to='/econstitution' className="submenu__link">ECOnstitution</Link>
                </motion.li>
            </Submenu>

            <Submenu name='FAQ'>
                <motion.li className="submenu__item">
                    <Link to='/where-to-begin' className="submenu__link">С чего начать</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/tokens" className="submenu__link">Токены</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/tokens-claim" className="submenu__link">Клейм токенов</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/eco-id" className="submenu__link">Eco ID</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/discord" className="submenu__link">Discord</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/discord-roles" className="submenu__link">Роли в Discord</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/ecollective" className="submenu__link">Ecollective</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Задания'>
                <motion.li className="submenu__item">
                    <Link to="/quests-active" className="submenu__link">Активные задания</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/association-grants" className="submenu__link">Association Grants</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Управление'>
                <motion.li className="submenu__item">
                    <Link to="/monetary-policy" className="submenu__link">Монетарная политика</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/eco-managment" className="submenu__link">Управление ECO</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/community-managment" className="submenu__link">Управление сообществом</Link>
                </motion.li><motion.li className="submenu__item">
                    <Link to="/layer-3" className="submenu__link">Layer 3</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/trustee" className="submenu__link">Доверительные управляющие</Link>
                </motion.li>
            </Submenu>

            <Submenu name='Другое'>
                <motion.li className="submenu__item">
                    <Link to="/useful-links" className="submenu__link">Полезные ссылки</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/whitepaper" className="submenu__link">Whitepaper</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/AMA-records" className="submenu__link">Записи АМА</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/seasons-eco" className="submenu__link">Сезоны ECO</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/tokens-claim2" className="submenu__link">Клейм токенов второй фазы</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/consensus-bot" className="submenu__link">Consensus Bot</Link>
                </motion.li>
                <motion.li className="submenu__item">
                    <Link to="/ecollective" className="submenu__link">Ecollective</Link>
                </motion.li>
            </Submenu>

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

                        <ThemeSwitcher />

                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0}
                            className="burger-menu__title">О проекте ЕСО</motion.h3>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}>
                                <Link to="/welcome" className="burger-menu__link">Что такое ECO?</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.05}>
                                <Link to="/econstitution" className="burger-menu__link">ECOnstitution</Link>
                            </motion.li>

                            
                        </motion.ul>
                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0.1}
                            className="burger-menu__title">FAQ</motion.h3>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
    
                            <motion.li
                                variants={investorsAnimation}
                                custom={0.15}
                                className="burger-menu__item">
                                <Link to="/where-to-begin" className="burger-menu__link">C чего начать</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.2}>
                                <Link to="/tokens" className="burger-menu__link">Токены</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.25}>
                                <Link to="/tokens-claim" className="burger-menu__link">Клейм токенов</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.3}>
                                <Link to="/eco-id" className="burger-menu__link">Eco ID</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.35}>
                                <Link to="/discord" className="burger-menu__link">Discord</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.4}>
                                <Link to="/discord-roles" className="burger-menu__link">Роли Discord</Link>
                            </motion.li>

                            <motion.li className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.45}>
                                <Link to="/ecollective" className="burger-menu__link">Ecollective</Link>
                            </motion.li>

                        </motion.ul>


                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0.5}
                            className="burger-menu__title">Задания</motion.h3>
                        <motion.ul
                            className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>
                            <motion.li
                                className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.55}>
                                <Link to="/quests-active" className="burger-menu__link">Активные задания</Link>
                            </motion.li>
                            <motion.li
                                className="burger-menu__item"
                                variants={investorsAnimation}
                                custom={0.6}>
                                <Link to="/association-grants" className="burger-menu__link">Association Grants</Link>
                            </motion.li>
                        </motion.ul>



                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}
                            variants={investorsAnimation}
                            custom={0.65}
                            className="burger-menu__title">Управление</motion.h3>
                        <motion.ul className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>

                            <motion.li
                                variants={investorsAnimation}
                                custom={0.7}
                                className="burger-menu__item">
                                <Link to="/monetary-policy" className="burger-menu__link">Монетарная политика</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={0.75}
                                className="burger-menu__item">
                                <Link to="/eco-managment" className="burger-menu__link">Управление ECO</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={0.8}
                                className="burger-menu__item">
                                <Link to="/community-managment" className="burger-menu__link">Управление сообществом</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={0.85}
                                className="burger-menu__item">
                                <Link to="/layer-3" className="burger-menu__link">Layer 3</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={0.9}
                                className="burger-menu__item">
                                <Link to="/trustee" className="burger-menu__link">Доверительные руководители</Link>
                            </motion.li>
                        </motion.ul>



                        <motion.h3
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 1, once: true }}
                            variants={investorsAnimation}
                            custom={0.95}
                            className="burger-menu__title">Другое</motion.h3>
                        <motion.ul
                            className="burger-menu__category"
                            initial='hidden'
                            animate='visible'
                            viewport={{ amount: 0.6, once: true }}>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1}
                                className="burger-menu__item">
                                <Link to="/useful-links" className="burger-menu__link">Полезные ссылки</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.05}
                                className="burger-menu__item">
                                <Link to="/whitepaper" className="burger-menu__link">Whitepaper</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.1}
                                className="burger-menu__item">
                                <Link to="/AMA-records" className="burger-menu__link">Записи Ама</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.15}
                                className="burger-menu__item">
                                <Link to="/seasons-eco" className="burger-menu__link">Сезоны ЕСО</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.2}
                                className="burger-menu__item">
                                <Link to="/tokens-claim2" className="burger-menu__link">Клейм токенов второй фазы</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.25}
                                className="burger-menu__item">
                                <Link to="/consensus-bot" className="burger-menu__link">Consensus Bot</Link>
                            </motion.li>

                            <motion.li
                                variants={investorsAnimation}
                                custom={1.3}
                                className="burger-menu__item">
                                <Link to="/ecollective" className="burger-menu__link">Ecollective</Link>
                            </motion.li>

                        </motion.ul>

                    </>}

                </div>
            </nav>
        </>
    )
}