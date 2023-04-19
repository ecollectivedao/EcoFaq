import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect, useState } from "react"
import { db } from 'config/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

import { Explanation } from 'containers'
import { H3, Heading, Li } from "ui"


export const DiscordRoles = () => {
    const [roles, setRoles] = useState<any>()

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, "discord", "discord-roles");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                setRoles(docSnap.data())
            }
        }
        fetchData()
    }, [])

    let keys: Array<string> = [];
    let values: Array<string> = []
    for (let key in roles) {
        keys.push(key)
    }
    for (let key in roles) {
        values.push(roles[key])
    }

    const view = keys.map((item, index) => {
        return (
            <Explanation key={item} name={item} explain={values[index]} />
        )
    })

    return (
        <SecondaryLayout>
            <section className="block-primary">
                {/* <h2 className="block-primary__title">
                    DISCORD Роли
                </h2>
                <p className="block-primary__subtitle">Описание ролей в Discord</p> */}
                <Heading title='DISCORD Роли'>
                Описание ролей в Discord
                </Heading>
                {view}
                <H3>
                    List of active BOTS
                </H3>
                <ul className="block-primary__list">
                    <Li>
                        Eco • LotteryBot - Бот, который может создавать лотереи с поддающейся проверке случайностью.
                    </Li>

                    <Li>
                        ECOrding - боту разрешено писать и удалять сообщения
                    </Li>
                    <Li>
                        Eco Voting Captcha Bot - Бот, который защищает голосование от злоупотреблений спамерами
                    </Li>
                    <Li>
                        EcoMemeBot - Бот, который определяет, сколько пользователей отреагировали на мем, и репостить его в топ-канал мемов.
                    </Li>
                    <Li>
                        The Accountant - эскроу-бот ( бот показывающий переводы эко поинтов.
                    </Li>
                    <Li>
                        EcoDiscordButler - Бот, который автоматически назначает роли в зависимости от того, какой URL-адрес приглашения был использован.
                    </Li>
                    <Li>
                        Eco FAQ Bot - Бот, который отвечает на часто задаваемые вопросы, связанные с ECO Discord.
                    </Li>
                </ul>
            </section>
        </SecondaryLayout>
    )
}