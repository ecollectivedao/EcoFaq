import {Link} from 'react-router-dom'

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News2, News, NewsCenter } from 'containers'

import coins from 'assets/img/coins.png'
import image from 'assets/img/4.png'


export const WhereToBegin = () => {
    return (
        <SecondaryLayout>

            <section className="block-primary">
                <h2 className="block-primary__title">
                    С чего начать
                </h2>
                <p className="block-primary__subtitle">Как участвовать?</p>

                <ol className="block-primary__list-number">
                    <li className="block-primary__list-item">
                        Для начала нам необходимо присоединиться к <a target='_blank' href="https://discord.eco.org/" className="block-primary__link">Дискорд ECO</a>
                    </li>
                    <li className="block-primary__list-item">
                        Переходим в канал "rules-and-faqs" и ознакамливаемся с правилами и ответами на самые распространненые вопросы.
                    </li>
                    <li className="block-primary__list-item">
                        Переходим в канал #start-here канал, под постом нажимаем на кнопку "Ready Layer 1". После этого у вас появится рольLayer 1
                    </li>
                    <li className="block-primary__list-item">
                        Добро пожаловать в Дискорд ECO! Текущие Баунти можно найти в разделе CONTENT and BOUNTI и в разделе <Link to='/active-quests' className='block-primary__link'>Активные задания</Link>

                        <img src={image} alt="" className="block-primary__img-sm" />
                    </li>
                    <li className="block-primary__list-item">
                        С активными Proposals ты можешь ознакомится на <a target='_blank' href="https://forums.eco.org/" className="block-primary__link">ЕСО форуме</a> 
                    </li>
                </ol>

            </section>


        </SecondaryLayout>
    )
}