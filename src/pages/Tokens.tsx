import { SecondaryLayout } from "layouts/SecondaryLayout"

import formule from 'assets/img/formule.png'
import eco from 'assets/img/ECO.png'
import ecoX from 'assets/img/ECOx.png'


export const Tokens = () => {
    return (
        <SecondaryLayout>

            <section className="block-primary">
                <h2 className="block-primary__title">
                    Tokens
                </h2>
                <p className="block-primary__subtitle">Какие есть токены?</p>
                <h3 className="block-primary__big">
                    В системе Eco Currency существует два токена
                </h3>

                <ul className="block-primary__gallery">
                    <li className="block-primary__gallery-item">
                        <div className="block-primary__gallery-visual">
                            <img src={eco} alt="" className="block-primary__gallery-image" />
                        </div>
                        <p className="block-primary__text"><strong>ECO</strong></p>
                        <p className="block-primary__text">Базовая валюта для расходов и сбережений, предложение которой регулируется денежно-кредитной политикой. Первоначальный саплай 10 миллиардов ECO. На этой ранней стадии исследований, ECO - это то, с чем можно играть, и постепенно платить. При хорошем управления и растущего внедрения, ECO в конечном итоге может стать валютой для сбережений.</p>
                    </li>
                    <li className="block-primary__gallery-item">
                        <div className="block-primary__gallery-visual">
                            <img src={ecoX} alt="" className="block-primary__gallery-image" />
                        </div>
                        <p className="block-primary__text"><strong>ECOx</strong></p>
                        <p className="block-primary__text">Вторичный актив для обеспечения надежного управления и поддержки ответственного роста. Он имеет ограниченное предложение, которое может только уменьшаться со временем. Общий саплай 1 миллиард ECOx. Каждая единица ECOx может быть конвертироваться в ЭКО в любое время по защищенному от инфляции курсу (т.е. каждая единица ECOx представляет собой процент от предложения ECO), и в конечном итоге ECOx может получать выгоду от комиссионных за транзакции в ECO. ECOx может быть конвертироваться в ECO только при одностороннем, необратимом обмене.</p>
                    </li>
                </ul>

                <h3 className="block-primary__big">Формула для преобразования ECOx в ECO:</h3>
                <img src={formule} alt="formule" className="block-primary__img-sm" />
                <p className="block-primary__text">
                    <strong>am</strong> = ЭКО отчеканен и возвращен конвертирующей стороне
                </p>
                <p className="block-primary__text">
                    <strong>αc</strong> = Общее текущее оборотное предложение ЭКО
                </p>
                <p className="block-primary__text">
                    <strong>βc</strong> = ECOx, конвертируемая конвертирующей стороной
                </p>
                <p className="block-primary__text">
                    <strong>βi</strong> = Первоначальное количество ECOx при лаунче
                </p>
                <h3 className="block-primary__big">Доступные Биржи</h3>
                <a href='https://www.kucoin.com/' target='_blank' className="block-primary__link">Kucoin</a><br />

                <a href='https://www.gate.io/' target='_blank' className="block-primary__link">Gate.io </a><br />

                <a href='https://www.bybit.com/' target='_blank' className="block-primary__link">Bybit</a><br />
            </section>

        </SecondaryLayout>
    )
}