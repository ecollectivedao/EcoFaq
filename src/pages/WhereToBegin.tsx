import {Link} from 'react-router-dom'

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Heading, Li } from 'ui'

import image from 'assets/img/4.png'

export const WhereToBegin = () => {
    return (
        <SecondaryLayout>

            <section className="block-primary">
                <Heading title='С чего начать'>
                    С чего начать?
                </Heading>

                <ol className="block-primary__list-number">
                    <Li >
                        Для начала нам необходимо присоединиться к <a target='_blank' href="https://discord.eco.org/" className="block-primary__link">Дискорд ECO</a>
                    </Li>
                    <Li >
                        Переходим в канал "rules-and-faqs" и ознакамливаемся с правилами и ответами на самые распространненые вопросы.
                    </Li>
                    <Li >
                        Переходим в канал #start-here канал, под постом нажимаем на кнопку "Ready Layer 1". После этого у вас появится рольLayer 1
                    </Li>
                    <Li >
                        Добро пожаловать в Дискорд ECO! Текущие Баунти можно найти в разделе CONTENT and BOUNTI и в разделе <Link to='/active-quests' className='block-primary__link'>Активные задания</Link>

                        <img src={image} alt="" className="block-primary__img-sm" />
                    </Li>
                    <Li >
                        С активными Proposals ты можешь ознакомится на <a target='_blank' href="https://forums.eco.org/" className="block-primary__link">ЕСО форуме</a> 
                    </Li>
                </ol>

            </section>

        </SecondaryLayout>
    )
}