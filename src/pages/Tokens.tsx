import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News2, News, NewsCenter } from 'containers'

import formule from 'assets/img/formule.png'
import eco from 'assets/img/ECO.png'
import ecoX from 'assets/img/ECOx.png'


export const Tokens = () => {
    return (
        <SecondaryLayout>
            <section className="news-center">
                <h2 className="news-center__title">
                    Токены
                </h2>

                <p className="news__descr">
                    В системе Eco Currency существует два токена
                </p>
                <ul className='news-center__list'>
                    <li className="news-center__list-item">
                        <img className='news-center__image' src={eco} alt="eco" />
                        <span className="news-center__strong">ECO</span>
                        Базовая валюта для расходов и сбережений, предложение которой регулируется денежно-кредитной политикой. Первоначальный саплай 10 миллиардов ECO. На этой ранней стадии исследований, ECO - это то, с чем можно играть, и постепенно платить. При хорошем управления и растущего внедрения, ECO в конечном итоге может стать валютой для сбережений.
                    </li>

                    <li className="news-center__list-item">
                        <img className="news-center__image" src={ecoX} alt="ecoX" />
                        <span className="news-center__strong">ECOx</span>
                        Вторичный актив для обеспечения надежного управления и поддержки ответственного роста. Он имеет ограниченное предложение, которое может только уменьшаться со временем. Общий саплай 1 миллиард ECOx. Каждая единица ECOx может быть конвертироваться в ЭКО в любое время по защищенному от инфляции курсу (т.е. каждая единица ECOx представляет собой процент от предложения ECO), и в конечном итоге ECOx может получать выгоду от комиссионных за транзакции в ECO. ECOx может быть конвертироваться в ECO только при одностороннем, необратимом обмене.
                    </li>
                </ul>

                <h3 className="text__subtitle">
                    Формула для преобразования ECOx в ECO
                </h3>
                <img className="news-center__formule" src={formule} alt="formule" />
                <div className="news-center__formule-descr">
                    <p className="news__descr">
                        am = ЭКО отчеканен и возвращен конвертирующей стороне <br />
                        αc = Общее текущее оборотное предложение ЭКО <br />
                        βc = ECOx, конвертируемая конвертирующей стороной <br />
                        βi = Первоначальное количество ECOx при лаунче <br />
                    </p>

                    <h3 className="text__subtitle">Доступные Биржи</h3>
                    <ul className="news-center__list-sec">
                        <li className="news-center__list-item-sec">
                            Kucoin https://www.kucoin.com/
                        </li>
                        <li className="news-center__list-item-sec">
                            Gate.io https://www.gate.io/
                        </li>
                        <li className="news-center__list-item-sec">
                            Bybit https://www.bybit.com/
                        </li>
                    </ul>


                    <h3 className="text__subtitle">
                    Адресса контрактов
                </h3>
                <ul className='news-center__list-sec'>
                    <li className="news-center__list-item-sec">
                        ECO - 0x8dBF9A4c99580fC7Fd4024ee08f3994420035727
                    </li>
                    <li className="news-center__list-item-sec">
                        ECOx - 0xcccD1Ba9f7acD6117834E0D28F25645dECb1736a
                    </li>
                </ul>

                </div>


            </section>
        </SecondaryLayout>
    )
}