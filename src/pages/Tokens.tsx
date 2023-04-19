import { SecondaryLayout } from "layouts/SecondaryLayout"

import formule from 'assets/img/formule.png'
import eco from 'assets/img/ECO.png'
import ecoX from 'assets/img/ECOx.png'
import { H3, Heading, Paragraph, Subtitle } from "ui"
import { Img } from "ui/Img/Img"
import { A } from "ui/A/A"


export const Tokens = () => {
    return (
        <SecondaryLayout>

            <section className="block-primary">
                <Heading title='Tokens'>
                Какие есть токены?
                </Heading>

                <H3>
                    В системе Eco Currency существует два токена
                </H3>

                <ul className="block-primary__gallery">
                    <li className="block-primary__gallery-item">
                        <div className="block-primary__gallery-visual">
                            <Img src={eco}/>
                        </div>
                        <Subtitle>ECO</Subtitle>
                        <Paragraph>Базовая валюта для расходов и сбережений, предложение которой регулируется денежно-кредитной политикой. Первоначальный саплай 10 миллиардов ECO. На этой ранней стадии исследований, ECO - это то, с чем можно играть, и постепенно платить. При хорошем управления и растущего внедрения, ECO в конечном итоге может стать валютой для сбережений.</Paragraph>
                    </li>
                    <li className="block-primary__gallery-item">
                        <div className="block-primary__gallery-visual">
                            <Img src={ecoX} />
                        </div>
                        <Subtitle>ECOx</Subtitle>
                        <Paragraph>Вторичный актив для обеспечения надежного управления и поддержки ответственного роста. Он имеет ограниченное предложение, которое может только уменьшаться со временем. Общий саплай 1 миллиард ECOx. Каждая единица ECOx может быть конвертироваться в ЭКО в любое время по защищенному от инфляции курсу (т.е. каждая единица ECOx представляет собой процент от предложения ECO), и в конечном итоге ECOx может получать выгоду от комиссионных за транзакции в ECO. ECOx может быть конвертироваться в ECO только при одностороннем, необратимом обмене.</Paragraph>
                    </li>
                </ul>

                <H3>Формула для преобразования ECOx в ECO:</H3>
                <Img src={formule} />
                <Paragraph>
                    <strong>am</strong> = ЭКО отчеканен и возвращен конвертирующей стороне
                </Paragraph>
                <Paragraph>
                    <strong>αc</strong> = Общее текущее оборотное предложение ЭКО
                </Paragraph>
                <Paragraph>
                    <strong>βc</strong> = ECOx, конвертируемая конвертирующей стороной
                </Paragraph>
                <Paragraph>
                    <strong>βi</strong> = Первоначальное количество ECOx при лаунче
                </Paragraph>
                <H3>Доступные Биржи</H3>
                <A link='https://www.kucoin.com/'>Kucoin</A>
                <A link='https://www.gate.io/'>Gate.io</A>
                <A link='https://www.bybit.com/'>Bybit</A>
            </section>

        </SecondaryLayout>
    )
}