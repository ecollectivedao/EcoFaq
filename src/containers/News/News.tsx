import coins from 'assets/img/coins.png'
import { motion } from 'framer-motion'

import './News.scss'

import image from 'assets/img/mob.png'

const imageReveal = {
    hidden: {
        scale: 0.5,
        opacity: 0
    },
    visible: (custom: number) => ({
        scale: 1,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}

const titleAnimation = {
    hidden: {
        x: '-50px',
        opacity: 0
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: 'easeInOut', delay: custom }
    })
}

const textAnimation = {
    hidden: {
        y: '50px',
        opacity: 0
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 1, delay: custom, ease: 'backInOut' }
    })
}

export const News = () => {
    return (
        <section
            className="news">
            <div className="news__container">
                <div className="news__block">
                    <motion.div
                        className="news__image"
                        viewport={{ amount: 0.5, once: true }}
                        initial='hidden'
                        whileInView='visible'
                        variants={imageReveal}>
                        <img src={coins} alt="news image" />
                    </motion.div>
                    <motion.div
                        className="news__info">
                        <motion.h2 className="news__title"
                            initial='hidden'
                            animate='visible'
                            variants={titleAnimation}>
                            {/* Welcome to ECO */}
                            Get involved
                        </motion.h2>
                        <motion.p
                            initial='hidden'
                            animate='visible'
                            variants={textAnimation}
                            custom={0.1}
                            className="news__subtitle">Что такое Eco?</motion.p>
                        <motion.p
                            initial='hidden'
                            animate='visible'
                            variants={textAnimation}
                            custom={0.15}
                            className="news__descr">ЕСО - это валюта с растущим сообществом, создающим продукты и услуги, способствующие ее развитию. Она разработана как децентрализованная альтернатива фиатным валютам, использующая денежную политику для развития и поддержки растущей экономики.</motion.p>
                        <motion.p initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.2, once: true }}
                            variants={textAnimation}
                            className="news__descr">Идея Eco основана на следующих предположениях:
                            При наличии более качественных экономических данных и более прозрачной структуры стимулов для управления, можно управлять и развивать резервную валюту, которая является цифровой и более четко соответствует коллективным интересам ее пользователей (нас).</motion.p>
                        <motion.p initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.2, once: true }}
                            variants={textAnimation} className="news__descr">Проще говоря: ЕСО - это денежная игра, в которой мы действительно можем выиграть - вместе.</motion.p>
                    </motion.div>
                </div>
                <motion.p
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ amount: 0.2, once: true }}
                    variants={textAnimation} className="news__descr">Эта страница содержит ссылки на ключевые ресурсы и ответы на часто задаваемые вопросы.</motion.p>
                <motion.ul
                    // initial='hidden'
                    // whileInView='visible'
                    // viewport={{ amount: 0.2, once: true }}
                    // // variants={textAnimation} 
                    className="news__list">
                    <motion.li
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation}
                        className="news__list-item">Это один из первых крипто-проектов, которые максимально прячут использование крипты для конечного пользователя, без необходимости разбираться в приватных ключах, tx hash и прочей ненужной для пользователя технической информации;</motion.li>
                    <motion.li
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation}
                        className="news__list-item">В США рынок финтеха развит довольно слабо по сравнению с Европой, процент на остаток по карте (привычная в СНГ вещь) пока что там не распространена совсем, а ставки по депозитам в банках - околонулевые;</motion.li>
                    <motion.li
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation}
                        className="news__list-item">CEO - Энди Брумберг - ранее основал Coinlist и еще ряд успешных стартапов.</motion.li>
                </motion.ul>
                <div className="news__info">
                    <motion.img
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={imageReveal}
                        className='news__img'
                        src={image}
                        alt="promo" />

                    <motion.h3
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation}
                        className="news__text-title">Для кого это приложение?</motion.h3>
                    <motion.p initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation} className="news__descr">В данный момент только для США и только для владельцев iPhone. Причина - законодательство. США - огромный рынок, поэтому команда решила, что для начала они делают упор только на одну страну.</motion.p>
                    <motion.p initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation} className="news__descr">В будущем планируется расширение на другие страны.</motion.p>

                    <motion.h3
                        initial='hidden'
                        whileInView='visible'
                        viewport={{ amount: 0.2, once: true }}
                        variants={textAnimation}
                        className="news__text-title">В чем преимущество Eco?</motion.h3>
                    <ul className="news__list">
                        <motion.li
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.2, once: true }}
                            variants={textAnimation}
                            className="news__list-item">Реальные потребители используют Eco. Мы уже десять лет ждем, когда кто-нибудь построит мост, чтобы криптовалюты стали выгодны основному миру. Начиная с приложения Eco и сети его партнеров, продукты, созданные на базе Eco, делают именно это - и это только начало. В процессе разработки находятся и другие продукты, предоставляющие всем желающим доступ к финансовым услугам, основанным на криптовалюте, и одновременно приобщающие их к валюте Eco.</motion.li>
                        <motion.li
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.2, once: true }}
                            variants={textAnimation}
                            className="news__list-item">Сообщество, создающее и поддерживающее Eco, не похоже ни на какое другое. Это очень активная, вдохновляющая и целеустремленная группа, объединенная одной целью: способствовать внедрению Эко. От глубоких экономических дискуссий до творческого контента - вы найдете свое место в сообществе Eco.</motion.li>
                        <motion.li
                            initial='hidden'
                            whileInView='visible'
                            viewport={{ amount: 0.2, once: true }}
                            variants={textAnimation}
                            className="news__list-item">Валюта Eco, $ECO, управляется собственной денежной политикой, подобно фиатным валютам, которые мы используем каждый день. Но вместо далекого центрального банка, определяющего политику, это делает избранная группа пользователей Eco (называемая "попечителями"), используя лучшие данные и лучшие инструменты, с более четкими стимулами.</motion.li>
                    </ul>
                </div>
            </div>
        </section>
    )
}