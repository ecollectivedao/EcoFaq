import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect, useState } from "react"
import { db } from 'config/firebaseConfig'
import { doc, getDoc } from 'firebase/firestore'

import { Explanation } from 'containers'
import { H3, Heading, Li } from "ui"
import { Helmet } from "react-helmet"


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
        <>
            <Helmet>
                <title>DISCORD Роли</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='DISCORD Роли'>
                        Описание ролей в Discord
                    </Heading>
                    {view}
                </section>
            </SecondaryLayout>
        </>

    )
}