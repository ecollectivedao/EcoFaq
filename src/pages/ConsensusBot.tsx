import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Helmet } from "react-helmet"
import { Heading, Paragraph, H3 } from "ui"

export const ConsensusBot = () => {
    return (
        <>
            <Helmet>
                <title>Consensus Bot</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">

                    <Heading title='Consensus Bot'>
                        Руководство по использованию
                    </Heading>
                    <Paragraph>
                        Layer 3 имеют возможность распределять бюджет, выделенный Eco Association для каждого нового сезона. Используя points (баллы, поступающие в качестве вознаграждения на индивидуальный баланс участников) для поощрения активности и укрепления социальных связей между членами сообщества.
                        Points будут представлять собой право на процентное распределение общего пула вознаграждений в $ECO tokens, на которые можно будет претендовать в конце каждого сезона.
                        Все решения, касающиеся распределения бюджета в, а также структуры организации мероприятий в сообществе принимаются путем голосования.
                        Перед запускам голосования о выделении бюджета для активности, участник Layer 3 подает предложение с полным описанием идеи, целей, сроков проведения и необходимого бюджета для реализации своего предложения. Ниже описано руководство по использованию Consensus Bot (by @factparade)
                    </Paragraph>

                    <Paragraph>
                        Перед подачей предложений убедитесь, что вы четко объяснили все предпосылки и детали. Четко укажите, какие действия будут предприняты если предложение будет одобрено. Избегайте расплывчастых описаний и подавайте предложение в соответсвующем канале, чтобы не загромождать общедоступные. Используйте ленивый консенсус ответсвенно! Также, предлагается запускать голосование на грант после проведения мероприятия, чтобы организатор четко знал сколько ему нужно запросить средств для распределения между победителями и тогда на аккаунтах L3 не будет лишних остатков (кроме собственных).
                    </Paragraph>

                    <H3>Как проходит голосование?</H3>
                    <Paragraph>
                        - Каждое голосование по предложению будет длиться 48 часов в канале
                        #l3-voting. Убедитесь, что вы четко обьяснили суть предложения!<br />
                        - По истичению даного времени вы получаете зеленый свет если у вас хотябы три “за”. Несогласных участников должно быть не более трех.<br />
                        - Если вам по каким-то причинам не нравится предложение, добавьте ❌ реакцию в канале #l3-voting. Не волнуйтесь если вы передумали! Вы можете изменить свое решение пока голосование активно.<br />
                        - Если вы передумали по поводу своего предложения (так случается), просто добавьте  ❌  реакцию под своим предложением на канале #l3-voting и напишите причину!
                    </Paragraph>


                    <Paragraph>
                        Примечание: используйте !anonymous или !anon вместо !propose и участники голосования будут скрыты (но станут видны когда голосование завершится)
                        Вы хотите попросить грант, чтобы наградить кого-то на основании его деятельности?
                    </Paragraph>
                    <H3>Вы хотите попросить грант, чтобы наградить кого-то на основании его деятельности?</H3>

                    <Paragraph>
                        Введите следующее: !propose @ник пользователя и нужная сумма.<br />
                        Пример: !propose @yulston 10000 награда за написание Консенсус бота.<br />
                        Еще пример: !propose @flarcos @saulo @Jeremie 10000 за создание полезных продуктов и @facts parade 3000 за помощь в реализации.<br />
                        Еще один пример:<br />
                        !propose для раздачи вознаграждений по итогам покерного турнира:<br />
                        1 место - @salova 3500<br />
                        2 место - @Petr 2000<br />
                        3 место - @Binn 1500<br />
                        4-5 места - @Levon @kwasy 1000
                    </Paragraph>

                    <H3>У вас есть отличная идея, но средства для этого не нужны?</H3>
                    <Paragraph>
                        Введите нужную вам информацию после команды !propose.<br />
                        Пример: !propose провести L3 встречу 20.04.23 at 18 utc.<br />
                        Еще пример: !propose провести турнир по шахматам в следующие выходные с призовым пулом в 20.000 поинтов.
                    </Paragraph>
                    <H3>“!tips” - автоматизированный учет личных поинтов (чаевые)</H3>

                    <Paragraph>
                        Вы хотите поощрить или отблагодарить кого-то?<br />
                        Введите следующее: !tips @ник пользователя и нужная сумма.<br />
                        Пример: !tips @Valico 100 за создание крутого мема.<br />
                        Еще пример: !tips @Valirini @MakeWeb @ihar 100 за отличные идеи, культуру и атмосферу!<br />
                    </Paragraph>

                    <Paragraph>
                        Проверка баланса чаевых?<br />
                        Введите команду !tips и бот сразу же покажет остаток чаевых на вашем балансе.
                    </Paragraph>

                    <Paragraph>
                        Запустите !export в подканале #l3-data для получения аналитики! Бот предоставит вам данные по активностям L3, грантам, предложениям и чаевым в одной таблице!
                    </Paragraph>

                </section>
            </SecondaryLayout>
        </>
    )
}
