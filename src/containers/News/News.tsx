import coins from 'assets/img/coins.png'
import { motion } from 'framer-motion'

import { imageReveal } from 'config/animation'
import { Paragraph, Heading, Li } from 'ui'

import './News.scss'

import image from 'assets/img/mob.png'
import { H3 } from 'ui/H3/H3'

export const News = () => {
    return (
        <section
            className="news">
            <div className="news__container">
                <div className="news__block">
                    <div className="news__image">
                        <motion.div className="news__image-wrapper"
                            viewport={{ amount: 0.2, once: true }}
                            initial='hidden'
                            whileInView='visible'
                            variants={imageReveal}
                        >
                            <img
                                src={coins}
                                alt="news image" />
                        </motion.div>
                    </div>
                    <motion.div
                        className="news__info">
                        <Heading title='Get involved'>
                            Что такое ЕСО?
                        </Heading>
                        <Paragraph>ЕСО - это валюта с растущим сообществом, создающим продукты и услуги, способствующие ее развитию. Она разработана как децентрализованная альтернатива фиатным валютам, использующая денежную политику для развития и поддержки растущей экономики.
                        </Paragraph>
                        <Paragraph>Идея Eco основана на следующих предположениях:
                            При наличии более качественных экономических данных и более прозрачной структуры стимулов для управления, можно управлять и развивать резервную валюту, которая является цифровой и более четко соответствует коллективным интересам ее пользователей (нас).</Paragraph>
                        <Paragraph>Проще говоря: ЕСО - это денежная игра, в которой мы действительно можем выиграть - вместе.</Paragraph>
                    </motion.div>
                </div>
                <Paragraph>Эта страница содержит ссылки на ключевые ресурсы и ответы на часто задаваемые вопросы.</Paragraph>
                <motion.ul
                    className="news__list">
                    <Li>Это один из первых крипто-проектов, которые максимально прячут использование крипты для конечного пользователя, без необходимости разбираться в приватных ключах, tx hash и прочей ненужной для пользователя технической информации;</Li>
                    <Li>В США рынок финтеха развит довольно слабо по сравнению с Европой, процент на остаток по карте (привычная в СНГ вещь) пока что там не распространена совсем, а ставки по депозитам в банках - околонулевые;</Li>
                    <Li>CEO - Энди Брумберг - ранее основал Coinlist и еще ряд успешных стартапов.</Li>
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

                    <H3>Для кого это приложение?</H3>
                    <Paragraph>В данный момент только для США и только для владельцев iPhone. Причина - законодательство. США - огромный рынок, поэтому команда решила, что для начала они делают упор только на одну страну.</Paragraph>
                    <Paragraph>В будущем планируется расширение на другие страны.</Paragraph>

                    <H3>В чем преимущество Eco?</H3>
                    <ul className="news__list">
                        <Li>Реальные потребители используют Eco. Мы уже десять лет ждем, когда кто-нибудь построит мост, чтобы криптовалюты стали выгодны основному миру. Начиная с приложения Eco и сети его партнеров, продукты, созданные на базе Eco, делают именно это - и это только начало. В процессе разработки находятся и другие продукты, предоставляющие всем желающим доступ к финансовым услугам, основанным на криптовалюте, и одновременно приобщающие их к валюте Eco.</Li>
                        <Li>Сообщество, создающее и поддерживающее Eco, не похоже ни на какое другое. Это очень активная, вдохновляющая и целеустремленная группа, объединенная одной целью: способствовать внедрению Эко. От глубоких экономических дискуссий до творческого контента - вы найдете свое место в сообществе Eco.</Li>
                        <Li>Валюта Eco, $ECO, управляется собственной денежной политикой, подобно фиатным валютам, которые мы используем каждый день. Но вместо далекого центрального банка, определяющего политику, это делает избранная группа пользователей Eco (называемая "попечителями"), используя лучшие данные и лучшие инструменты, с более четкими стимулами.</Li>
                    </ul>
                </div>
            </div>
        </section>
    )
}