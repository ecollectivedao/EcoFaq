import { Helmet } from "react-helmet"

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { H3, Heading, Li, Paragraph, Img } from 'ui'

import events from 'assets/img/events_button.png'
import { useEffect } from "react"
import { Link } from "react-router-dom"

import bg from 'assets/img/bg/10.png'

export const WhereToBegin = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Первый шаг</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='С чего начать'>
                        Первый шаг
                    </Heading>

                    <Paragraph>
                        С момента создания ЕСО комьюнити в марте 2021 года десятки тысяч членов сообщества работали вместе, чтобы создать нечто особенное. Они сделали это, потому что верят и хотят участвовать в миссии EСО, которая заключается в том, чтобы ваши деньги снова работали на вас.
                    </Paragraph>

                    <img className='poster-bg' src={bg} alt="poster" />

                    <Paragraph>
                        После нескольких лет разработки, создания сообщества и продукта, валюта $ECO становится реальностью!
                    </Paragraph>

                    <H3>Лучший способ принять участие - это сразу же вступить в игру!</H3>
                    <ol className="block-primary__list-number">
                        <Li >
                            Для начала нам необходимо присоединиться к <a target='_blank' href="https://discord.eco.org/" className="block-primary__link">Дискорд ECO</a>
                        </Li>
                        <Li >
                            Переходим в канал "start-here" и Нажмите кнопку "Ready Layer 1", и вы в игре.
                            Если вы хотите первым узнавать о событиях, челенджах нажмите кнопку "Events",<br />
                            <Img src={events} />
                        </Li>
                        <Li >
                            Переходим в канал "rules-and-faqs" и ознакамливаемся с правилами и ответами на самые распространненые вопросы.
                        </Li>
                        <Li >
                            Вы в игре. Поздоровайтесь и представьтесь в канале #general. Задавайте вопросы. Делайте свой вклад  в ЕСО!
                        </Li>
                        <Li >
                            Не забудьте представиться в канале #Introduce-yourself . Расскажите о себе, своих навыках и умениях, опыте и чем вы можете помочь ЕСО
                        </Li>

                    </ol>
                    <H3>
                    Смотрите по теме:
                    </H3>
                    <Link to='discord-roles'>Описание ролей Дискорд</Link>
                </section>

            </SecondaryLayout>
        </>
    )
}