import { SecondaryLayout } from "layouts/SecondaryLayout"

import ecoInstructions from 'assets/img/eco_instructions.png'
import { H3, Heading, Li, Paragraph } from "ui"
import { ImgBig } from "ui/ImgBig/ImgBig"


export const TokensClaim = () => {
    return (
        <SecondaryLayout>
            <section className="block-primary">
                <Heading title='Claim токенов'>
                Как заклеймить свои токены?
                </Heading>
                    <H3>
                        Инструкция
                    </H3>

                    <ol className="block-primary__list-number">
                        <Li>
                            Перейдите на сайт https://eco.gm/ и сминтите свой ECO ID ("Claim your Eco ID" внизу страницы). ECO ID - это нфт стандарта erc721, будет закреплен за кошельком, переместить невозможно. Необходимо немного Eth на оплату комисси за клейм токенов и ECO ID.
                        </Li>
                        <Li>
                            Если у вас были поинты в дискорде или в твиттере, вы можете получить токены ECO и ECOx.  Клейм токенов проходит в два этапа:
                        </Li>
                    </ol>

                    <ul className="block-primary__list">
                        <Li>
                            При первом клейме вы получаете 0,5x от количества поинтов в токенах ECOx + 5x в токенах ECO.
                        </Li>

                        <Li>
                            При втором клейме вы можете получить от 0,5x до 3,5x от количества поинтов в токенах ECOx
                        </Li>
                    </ul>

                    <Paragraph>
                        На графике ниже расписано количество токенов в зависимости от срока клейма.
                    </Paragraph>
                    <ImgBig src={ecoInstructions}/>

                    <Paragraph>
                        Первый клейм нужно сделать до 28.10.2023. Если на экране у вас возникает ошибка: "If you're seeing this message..." - используйте VPN. Если у вас возникают проблемы с клеймом - напишите в канал ⛑eco-support.
                    </Paragraph>

            </section>
        </SecondaryLayout>
    )
}