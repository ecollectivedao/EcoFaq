import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News2, News, NewsCenter } from 'containers'

import ecoInstructions from 'assets/img/eco_instructions.png'


export const TokensClaim = () => {
    return (
        <SecondaryLayout>
            <section className="news-center">
                <h2 className="news-center__title">
                    Claim токенов
                </h2>

                <h3 className="text__subtitle">
                    В этом разделе описано как заклеймить свои токены
                </h3>

                <ol className="news__list-number">
                    <li className="news__list-item">
                        Перейдите на сайт https://eco.gm/ и сминтите свой ECO ID ("Claim your Eco ID" внизу страницы). ECO ID - это нфт стандарта erc721, будет закреплен за кошельком, переместить невозможно. Необходимо немного Eth на оплату комисси за клейм токенов и ECO ID.
                    </li>
                    <li className="news__list-item">
                        Если у вас были поинты в дискорде или в твиттере, вы можете получить токены ECO и ECOx.  Клейм токенов проходит в два этапа:
                    </li>
                </ol>

                <ul className="news__list">
                    <li className="news__list-item">
                        При первом клейме вы получаете 0,5x от количества поинтов в токенах ECOx + 5x в токенах ECO.
                    </li>

                    <li className="news__list-item">
                        При втором клейме вы можете получить от 0,5x до 3,5x от количества поинтов в токенах ECOx
                    </li>
                </ul>

                <p className="news__descr">
                    На графике ниже расписано количество токенов в зависимости от срока клейма.
                </p>
                <img className='news__img' src={ecoInstructions} alt="" />

                <p className="news__descr">
                    Первый клейм нужно сделать до 28.10.2023. Если на экране у вас возникает ошибка: "If you're seeing this message..." - используйте VPN. Если у вас возникают проблемы с клеймом - напишите в канал ⛑eco-support.
                </p>
            </section>
        </SecondaryLayout>
    )
}