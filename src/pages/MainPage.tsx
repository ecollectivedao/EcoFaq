import { MainLayout } from "layouts/MainLayout"
import { Promo } from 'containers/Promo/Promo'
import { Investors } from "containers/Investors/Investors"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

import ecoImage from 'assets/img/ECO.png'
import { Button, H2, Img, Paragraph } from "ui"
import { Link } from "react-router-dom"
import { JoinUs } from "containers"
import { textAnimation } from "config/animation"
import { motion } from "framer-motion"

export const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Eco FAQ - Портал Eco-сообщества для Eco протокола</title>
                <meta name="description" content="Eco FAQ - сайт о проекте Eco протокола, задания, перевод документов и многое другое"></meta>
            </Helmet>
            
            <MainLayout>
                <Promo />

                <section className="about-eco">
                    <div className="container about-eco__container">
                        <div className="about-eco__descr">
                            <H2>Что такое ECO?</H2>
                            <Paragraph dark={true}>Eco - это децентрализованная валюта, позволяющая создать экономику нового типа, которая работает более прозрачно и в наших коллективных интересах. Это сочетание чего-то старого - стремления создать лучшую валюту - и чего-то нового - технологии, позволяющей валютам самостоятельно управляться своими сообществами.
                            </Paragraph>

                            <Paragraph dark={true}>
                                Идея Eco основана на следующих предположениях: При наличии более качественных экономических данных и более прозрачной структуры стимулов для управления, можно управлять и развивать резервную валюту, которая является цифровой и более четко соответствует коллективным интересам ее пользователей (нас).
                            </Paragraph>

                            <div className="about-eco__button">
                                <Button to='/welcome' noanim>Подробнее</Button>
                            </div>

                        </div>

                        <div className="about-eco__img">
                            <Img src={ecoImage} />
                        </div>
                    </div>
                </section>

                <section className="info">
                    <div className="container">
                        <H2>Полезная информация</H2>
                        <ul className="info__list">
                            <motion.li
                                className="info__list-item"
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}>
                                <Link to='/welcome'>
                                    <p>Что такое ECO?</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}
                                className="info__list-item">
                                <Link to='/AMA-records'>
                                    <p>Записи АМА</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}
                                className="info__list-item">
                                <Link to='/discord'>
                                    <p>О Discord сервере</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}
                                className="info__list-item">
                                <Link to='/quests-active'>
                                    <p>Активные задания</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}
                                className="info__list-item">
                                <Link to='/association-grants'>
                                    <p>Association Grants</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                            <motion.li
                                initial='hidden'
                                whileInView='visible'
                                variants={textAnimation}
                                viewport={{ amount: 0.1, once: true }}
                                custom={0.2}
                                className="info__list-item">
                                <Link to='/whitepaper'>
                                    <p>Whitepaper</p>
                                    <span>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16.0039 9.414L7.39691 18.021L5.98291 16.607L14.5889 8H7.00391V6H18.0039V17H16.0039V9.414Z" fill="var(--color-text)" />
                                        </svg>
                                    </span>
                                </Link>
                            </motion.li>
                        </ul>
                    </div>
                </section>

                <JoinUs />
                <Investors />
            </MainLayout>
        </>
    )
}