import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News2, News, NewsCenter } from 'containers'

import coins from 'assets/img/coins.png'


export const WhereToBegin = () => {
    return (
        <SecondaryLayout>
            <section className="news">
                <div className="news__container">
                    <div className="news__block">
                        <div className="news__image">
                            <img src={coins} alt="news image" />
                        </div>
                        <div className="news__info">
                            <h2 className="news__title">
                                {/* Welcome to ECO */}
                                Get started
                            </h2>
                            <p className="news__subtitle">С чего начать?</p>
                            {/* <h3 className="news__text-title">Как учавствовать?</h3> */}

                            <ol className="news__list-number">
                                <li className="news__list-item">Для начала нам необходимо присоединиться к
                                    <a href="https://discord.eco.org/" className="news__list-link"> Дискорд  ECO
                                    </a>
                                </li>
                                <li className="news__list-item">Переходим в канал "rules-and-faqs" и ознакамливаемся с правилами и ответами на самые распространненые вопросы. </li>
                                <li className="news__list-item">Переходим в канал #start-here канал, под постом нажимаем на кнопку "Ready Layer 1". После этого у вас появится роль Layer 1.</li>
                                <li className="news__list-item">Добро пожаловать в Дискорд ECO! Текущие Баунти можно найти в разделе CONTENT and BOUNTI и в разделе "Активные задания"</li>
                                <li className="news__list-item">С активными Proposals ты можешь ознакомится на
                                    <a href="https://discord.eco.org/" className="news__list-link"> ЕСО форуме
                                    </a>.
                                </li>
                            </ol>

                            {/* <p className="news__descr">ЕСО - это валюта с растущим сообществом, создающим продукты и услуги, способствующие ее развитию. Она разработана как децентрализованная альтернатива фиатным валютам, использующая денежную политику для развития и поддержки растущей экономики.</p> */}
                            {/* <p className="news__descr">Идея Eco основана на следующих предположениях:
                                При наличии более качественных экономических данных и более прозрачной структуры стимулов для управления, можно управлять и развивать резервную валюту, которая является цифровой и более четко соответствует коллективным интересам ее пользователей (нас).</p> */}
                            {/* <p className="news__descr">Проще говоря: ЕСО - это денежная игра, в которой мы действительно можем выиграть - вместе.</p> */}
                        </div>
                    </div>
                    {/* <p className="news__descr">Эта страница содержит ссылки на ключевые ресурсы и ответы на часто задаваемые вопросы.</p> */}
                    {/* <ul className="news__list">
                        <li className="news__list-item">Это один из первых крипто-проектов, которые максимально прячут использование крипты для конечного пользователя, без необходимости разбираться в приватных ключах, tx hash и прочей ненужной для пользователя технической информации;</li>
                        <li className="news__list-item">В США рынок финтеха развит довольно слабо по сравнению с Европой, процент на остаток по карте (привычная в СНГ вещь) пока что там не распространена совсем, а ставки по депозитам в банках - околонулевые;</li>
                        <li className="news__list-item">CEO - Энди Брумберг - ранее основал Coinlist и еще ряд успешных стартапов.</li>
                    </ul> */}
                    <div className="news__info">
                        {/* <img className='news__img' src={image} alt="promo" />

                        <h3 className="news__text-title">Для кого это приложение?</h3>
                        <p className="news__descr">В данный момент только для США и только для владельцев iPhone. Причина - законодательство. США - огромный рынок, поэтому команда решила, что для начала они делают упор только на одну страну.</p>
                        <p className="news__descr">В будущем планируется расширение на другие страны.</p>

                        <h3 className="news__text-title">В чем преимущество Eco?</h3>
                        <ul className="news__list">
                            <li className="news__list-item">Реальные потребители используют Eco. Мы уже десять лет ждем, когда кто-нибудь построит мост, чтобы криптовалюты стали выгодны основному миру. Начиная с приложения Eco и сети его партнеров, продукты, созданные на базе Eco, делают именно это - и это только начало. В процессе разработки находятся и другие продукты, предоставляющие всем желающим доступ к финансовым услугам, основанным на криптовалюте, и одновременно приобщающие их к валюте Eco.</li>
                            <li className="news__list-item">Сообщество, создающее и поддерживающее Eco, не похоже ни на какое другое. Это очень активная, вдохновляющая и целеустремленная группа, объединенная одной целью: способствовать внедрению Эко. От глубоких экономических дискуссий до творческого контента - вы найдете свое место в сообществе Eco.</li>
                            <li className="news__list-item">Валюта Eco, $ECO, управляется собственной денежной политикой, подобно фиатным валютам, которые мы используем каждый день. Но вместо далекого центрального банка, определяющего политику, это делает избранная группа пользователей Eco (называемая "попечителями"), используя лучшие данные и лучшие инструменты, с более четкими стимулами.</li>
                        </ul> */}
                    </div>
                </div>
            </section>
        </SecondaryLayout>
    )
}