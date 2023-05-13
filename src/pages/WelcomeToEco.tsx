import { Helmet } from "react-helmet"

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News } from 'containers'
import { useEffect } from "react"



export const WelcomeToEco = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Добро пожаловать в ECO</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <News />
            </SecondaryLayout>
        </>

    )
}