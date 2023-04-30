import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Helmet } from "react-helmet"

import ecoInstructions from 'assets/img/eco_instructions.png'
import { A, Heading, Li, Paragraph } from "ui"
import { ImgBig } from "ui/ImgBig/ImgBig"
import { Link } from "react-router-dom"


export const TokensClaim = () => {
    return (
        <>
            <Helmet>
                <title>Claim токенов</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='Claim токенов'>
                        Как заклеймить свои токены?
                    </Heading>

                    <Paragraph>
                        Points - это основа, на которой мы проводили эксперимент по координации действий нашего сообщества перед запуском, который начался в марте 2021 года.
                        Если вы принимали активное участие в жизни проекта и заработали Points в период с марта 2021г до ноября 2022г ( до основного лаунча токенов) - вы можете обменять свои поинты на токены ЕСО и ЕСОх.
                    </Paragraph>
                    <Paragraph>
                        После запуска ЕСО (с января 2023г) существует новая схема заработка и распределние Points. Более подробно вы можете ознакомится <Link to=''>ЗДЕСЬ</Link>
                    </Paragraph>
                    <ol className="block-primary__list-number">
                        <Li>
                            Перейдите на сайт <A link='https://eco.gm/'>https://eco.gm/</A> и сминтите свой ECO ID ("Claim your Eco ID" внизу страницы). ECO ID - это нфт стандарта erc721, будет закреплен за кошельком, переместить невозможно. Необходимо немного Eth на оплату комисси за клейм токенов и ECO ID.
                            Более подробно об ECO ID вы можете ознакомится <Link to=''>ТУТ</Link>.
                        </Li>
                        <Li>
                            Если у вас были поинты в дискорде или в твиттере, вы можете получить токены <strong>ECO</strong> и <strong>ECOx</strong>.  Клейм токенов проходит в <strong>два этапа</strong>:
                        </Li>
                    </ol>

                    <ul className="block-primary__list">
                        <Li>
                            При первом клейме вы получаете <strong>0,5x от количества поинтов в токенах ECOx + 5x в токенах ECO</strong>.
                        </Li>

                        <Li>
                            При втором клейме вы можете получить <strong>от 0,5x до 3,5x от количества поинтов в токенах ECOx</strong>.
                        </Li>
                    </ul>

                    <Paragraph>
                        На графике ниже расписано количество токенов в зависимости от срока клейма.
                    </Paragraph>
                    <ImgBig src={ecoInstructions} />

                    <Paragraph>
                        Первый клейм нужно сделать до <strong>28.10.2023</strong>. Если на экране у вас возникает ошибка: "If you're seeing this message..." - используйте VPN. Если у вас возникают проблемы с клеймом - напишите в канал #support.
                    </Paragraph>

                </section>
            </SecondaryLayout>
        </>
    )
}