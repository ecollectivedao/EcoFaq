import { SecondaryLayout } from "layouts/SecondaryLayout"
import { H3, Heading, Paragraph, Subtitle, Img, A } from "ui"

import formule from 'assets/img/formule.png'
import eco from 'assets/img/ECO.png'
import ecoX from 'assets/img/ECOx.png'
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export const Tokens = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Какие есть токены?</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>

                <section className="block-primary">
                    <Heading title='Токены'>
                        Какие есть токены?
                    </Heading>

                    <H3>
                        В системе Eco валюты существует два токена
                    </H3>

                    <ul className="block-primary__gallery">
                        <li className="block-primary__gallery-item">
                            <div className="block-primary__gallery-visual">
                                <Img src={eco} />
                            </div>
                            <Subtitle>ECO</Subtitle>
                            <div className="block-primary__description">
                            <Paragraph>Базовая валюта для расходов и сбережений, предложение которой регулируется денежно-кредитной политикой. Первоначальный саплай 10 миллиардов ECO. На этой ранней стадии исследований, ECO - это то, с чем можно играть, и постепенно платить. При хорошем управления и растущего внедрения, ECO в конечном итоге может стать валютой для сбережений.
                            </Paragraph>
                            </div>
                            
                            <Paragraph>
                                Aдрес контракта: <br /><strong className='token__id'>0x8dBF9A4c99580fC7Fd4024ee08f3994420035727</strong>
                            </Paragraph>
                            <Paragraph>
                                Доступные биржи: <A link="https://uniswap.org/">https://uniswap.org/</A>
                            </Paragraph>
                        </li>
                        <li className="block-primary__gallery-item">
                            <div className="block-primary__gallery-visual">
                                <Img src={ecoX} />
                            </div>
                            <Subtitle>ECOx</Subtitle>
                            <div className="block-primary__description">
                            <Paragraph>Вторичный актив для обеспечения надежного управления и поддержки ответственного роста. Он имеет ограниченное предложение, которое может только уменьшаться со временем. Общий саплай 1 миллиард ECOx. Каждая единица ECOx может быть конвертироваться в ЭКО в любое время по защищенному от инфляции курсу (т.е. каждая единица ECOx представляет собой процент от предложения ECO), и в конечном итоге ECOx может получать выгоду от комиссионных за транзакции в ECO. ECOx может быть конвертироваться в ECO только при одностороннем, необратимом обмене.</Paragraph>
                            </div>
                            
                            <Paragraph>
                                Aдрес контракта: <br /><strong className='token__id'>0xcccD1Ba9f7acD6117834E0D28F25645dECb1736a</strong>
                            </Paragraph>
                            <Paragraph>
                                Доступные биржи: <A link="https://uniswap.org/">https://uniswap.org/</A>
                            </Paragraph>
                        </li>
                    </ul>

                    <H3>Формула для преобразования ECOx в ECO:</H3>
                    <Img src={formule} />
                    <Paragraph>
                        <strong>am</strong> = ECO отчеканен и возвращен конвертирующей стороне
                    </Paragraph>
                    <Paragraph>
                        <strong>αc</strong> = Общее текущее оборотное предложение ECO
                    </Paragraph>
                    <Paragraph>
                        <strong>βc</strong> = ECOx, конвертируемая конвертирующей стороной
                    </Paragraph>
                    <Paragraph>
                        <strong>βi</strong> = Первоначальное количество ECOx при лаунче
                    </Paragraph>
                    <H3>Доступные Биржи</H3>
                    <A link='https://www.kucoin.com/'>Kucoin</A><br/>
                    <A link='https://www.gate.io/'>Gate.io</A><br/>
                    <A link='https://www.bybit.com/'>Bybit</A><br/>
                    <A link='https://app.uniswap.org/#/tokens/ethereum/0xcccD1Ba9f7acD6117834E0D28F25645dECb1736 '>Uniswap</A><br/>
                </section>

            </SecondaryLayout>
        </>
    )
}