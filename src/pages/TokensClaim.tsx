import { SecondaryLayout } from "layouts/SecondaryLayout"

import ecoInstructions from 'assets/img/eco_instructions.png'


export const TokensClaim = () => {
    return (
        <SecondaryLayout>
            <section className="block-primary">
                <h2 className="block-primary__title">
                    Claim токенов
                </h2>
                <p className="block-primary__subtitle">Как заклеймить свои токены?</p>
                    <h3 className="block-primary__big">
                        Инструкция
                    </h3>

                    <ol className="block-primary__list-number">
                        <li className="block-primary__list-item">
                            Перейдите на сайт https://eco.gm/ и сминтите свой ECO ID ("Claim your Eco ID" внизу страницы). ECO ID - это нфт стандарта erc721, будет закреплен за кошельком, переместить невозможно. Необходимо немного Eth на оплату комисси за клейм токенов и ECO ID.
                        </li>
                        <li className="block-primary__list-item">
                            Если у вас были поинты в дискорде или в твиттере, вы можете получить токены ECO и ECOx.  Клейм токенов проходит в два этапа:
                        </li>
                    </ol>

                    <ul className="block-primary__list">
                        <li className="block-primary__list-item">
                            При первом клейме вы получаете 0,5x от количества поинтов в токенах ECOx + 5x в токенах ECO.
                        </li>

                        <li className="block-primary__list-item">
                            При втором клейме вы можете получить от 0,5x до 3,5x от количества поинтов в токенах ECOx
                        </li>
                    </ul>

                    <p className="block-primary__text">
                        На графике ниже расписано количество токенов в зависимости от срока клейма.
                    </p>
                    <img className='block-primary__img' src={ecoInstructions} alt="" />

                    <p className="block-primary__text">
                        Первый клейм нужно сделать до 28.10.2023. Если на экране у вас возникает ошибка: "If you're seeing this message..." - используйте VPN. Если у вас возникают проблемы с клеймом - напишите в канал ⛑eco-support.
                    </p>

            </section>
        </SecondaryLayout>
    )
}