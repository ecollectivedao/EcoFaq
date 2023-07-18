import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { A, H3, Heading, Paragraph, ParagraphRight } from "ui"
import { H4 } from "ui/H4/H4"

import bg from 'assets/img/bg/02.png'

export const Discord = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (

        <>
            <Helmet>
                <title>Дискорд</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">

                    <Heading title='ДИСКОРД CЕРВЕР'>
                        Краткое описание каналов в дискорд
                    </Heading>

                    <img className='poster-bg' src={bg} alt="poster" />

                    <H3>
                        Welcome
                    </H3>
                    <Paragraph>
                        <strong>🏁start-here</strong> - канал, в котором содержится краткая информация о сервере ECO. в этом канале вы можете получить роли: Layer 1, Events, Languages, Archive
                    </Paragraph>
                    <Paragraph>
                        <strong>rules and faqs</strong> - правила сервера и ответы на самые популярные вопросы
                    </Paragraph>
                    <Paragraph>
                        <strong>Econstitution</strong> - ЕСОнтистуция проекта
                    </Paragraph>
                    <Paragraph>
                        <strong>minor-announcements</strong> - информация об активностях
                    </Paragraph>
                    <Paragraph>
                        <strong>announcements</strong> - все самые важные новости проекта публикуются здесь
                    </Paragraph>
                    <Paragraph>
                        <strong>official-link and-contract-addresses</strong> - ссылки на все официальные источники и адрес контрактов
                    </Paragraph>
                    <Paragraph>
                        <strong>🔈support</strong> - канал поддержки/технической помощи.
                    </Paragraph>
                    <Paragraph>
                        <strong>⚠report-spam</strong> - канал, в котором можно сообщить о спаме/вредоносной активности, связанной с ECO. Прикрепите в сообщение доказательство вредоносной активности(скрины из переписки и т.д.) и отметьте Dave | Eco#2900 или Модераторов @Stefan, @rob, @Valirini или @Saulo
                    </Paragraph>
                    <Paragraph>
                        <strong>Past-events-audio</strong> - записи предыдущих мероприятий
                    </Paragraph>

                    <H3>
                        Trustees
                    </H3>
                    <Paragraph><strong>trustee-candidate-introductions</strong> - в этом канале вы можете найти информацию про попечителей</Paragraph>
                    <Paragraph><strong>trustee community</strong> - канал предназначен для связи между группой попечителей монетарной политики и широким сообществом.</Paragraph>
                    <Paragraph><strong>governance-and-monetary-policy-updates</strong> - <a target='_blank' href='https://discord.com/channels/768556386404794448/1064489555459317791/1100378487258370059'>информация об актуальном голосовании/управлении и обновлении монетарной политики</a></Paragraph>


                    <H3>
                        Layer 3
                    </H3>
                    <H4>Данный раздел могут видеть только пользователи с ролью Layer 3</H4>
                    <H4>Процесс отбора в Layer 3 в разработке.</H4>
                    <Paragraph><strong>l3-announcement</strong> - важные анонсы для Layer 3</Paragraph>
                    <Paragraph><strong>l3-general</strong> - основной канал для общения Layer 3</Paragraph>
                    <Paragraph><strong>l3-ecolective</strong> - канал для организации и обсуждения работы ecollective</Paragraph>
                    <Paragraph><strong>l3-voting</strong> - канал для голосований</Paragraph>
                    <Paragraph><strong>l3-season-2-activities</strong> - в данном разделе вы можете предложить на рассмотрение свою идею активности и получить обратную связь и поддержку от Layer 3 и команды</Paragraph>
                    <Paragraph><strong>l3-feedback</strong> - канал для обратной связи по любому вопросу</Paragraph>
                    <Paragraph><strong>l3-data</strong> - основной канал c данными</Paragraph>
                    <Paragraph><strong>l3-voice</strong> - голосовой канал для Layer 3</Paragraph>

                    <H3>
                        Layer 2
                    </H3>
                    <H4>Данный раздел могут видеть только пользователи с ролью Layer 2</H4>
                    <Paragraph><strong>litany-against-doubt</strong> - ежедневная мантра)</Paragraph>
                    <Paragraph><strong>💬speakeasy</strong> - канал, в котором участники с ролью Layer 2 могут координировать свои действия по решению проблем и обсуждать темы, уникальные для этой роли</Paragraph>
                    <Paragraph><strong>new-l2-candidates</strong> - канал для вынесения кандидатов на роль l2 и их обсуждения</Paragraph>
                    {/* <Paragraph><strong>marketing-ecollective</strong> - в этом канале обсуждаются идеи для страниц HolaECO, Ecolytes Twitters Ecolytes и Instagram</Paragraph>
                    <Paragraph><strong>mutuail aid</strong> - Канал для добрых дел</Paragraph>
                    <Paragraph><strong>💬speakeasy</strong> - Канал, в котором участники с ролью Layer 2 могут координировать свои действия по решению проблем и обсуждать темы, уникальные для этой роли.</Paragraph>
                    <Paragraph><strong>happy-birthday</strong> - поделитесь датой своего ДР и получите поинты и поздравления</Paragraph>
                    <Paragraph><strong>🃏Layer2 game</strong> - Канал, в котором проходят анонсы предстоящих игр для Л2</Paragraph>
                    <Paragraph><strong>sweepstakes</strong> - лотерея.</Paragraph> */}




                    <H3>
                        Discussions
                    </H3>
                    <Paragraph><strong>🚀general </strong> - основное общение на английском, которое не подпадает под другие категории. Здесь вы можете вести общение со всеми участниками. Кроме того, здесь публикуется важная информация от префектов и членов команды ECO. Самые заметные и активные участники иногда получают поинты</Paragraph>
                    <Paragraph><strong>📈crypto economics-governance</strong> - канал для обсуждения всего управления крипто єкономикой</Paragraph>
                    <Paragraph><strong>introduce-yourself</strong> - в этом канале вы можете написать о сових навыках,найти подходящего кандидата для работы и тд</Paragraph>
                    <Paragraph><strong>daily-news</strong> - канал с ежедневными новостями</Paragraph>
                    <Paragraph><strong>🧪meme-lab</strong> - канал, в котором публикуются качественные мемы, касающиеся проекта ECO</Paragraph>



                    <H3>
                        Accountant Mechanics
                    </H3>
                    <Paragraph><strong>layer 3 points granting</strong> - канал для получения гранта участников l3 для проведения активностей</Paragraph>
                    <Paragraph><strong>check-your-points</strong> - проверка баланса поинтов</Paragraph>
                    <Paragraph><strong>eco-server-points-log</strong> - информация о движении поинтов на ЕСОсервере</Paragraph>
                    <Paragraph><strong>grants-log</strong> - информация о грантах</Paragraph>
                    <Paragraph><strong>points-log</strong> - информация о движении очков на всех серверах с ботом Accountant</Paragraph>



                    <H3>
                        Built on ECO
                    </H3>
                    <Paragraph><strong>Eco App</strong> - этот канал предназначен для обсуждения одного из первых продуктов, созданных на основе системы эковалюты — Eco App.</Paragraph>
             

                    <H3>
                        Community activities 
                    </H3>
                    <Paragraph><strong>#ECO-CREATORS</strong> - этот канал предназначен для создания концептуального и оригинального контента, сделанного сообществом, в разных форматах и на разные темы
                    </Paragraph>
                    <Paragraph><strong>Eco-Art</strong> - задания на тему Art
                    </Paragraph>
                    <Paragraph><strong>🧩Challenges</strong> - канал, в котором публикуются активные конкурсы и задания от участников ECO комьюнити.
                    </Paragraph>
                    <Paragraph><strong>Eco-Friendly</strong> - канал с полезными заданиями
                    </Paragraph>
                    <Paragraph><strong>Eco metaverse</strong> - челенджи по игре sandbox
                    </Paragraph>
                    <Paragraph><strong>yoga</strong> - онлайн занятие по йоге
                    </Paragraph>

        
                    <H3>
                        Other languages
                    </H3>

                    <Paragraph><strong>🇷🇺ru-eco</strong> - основной канал для ру-сообщества, здесь осуществляется помощь новичкам, обсуждаются активности и новости проекта.</Paragraph>
                    <Paragraph><strong>🌏other-languages</strong> - для всех остальных языков, поиск единомышленников</Paragraph>

                    <ParagraphRight>Авторская статья</ParagraphRight>

                </section>
            </SecondaryLayout>
        </>

    )
}