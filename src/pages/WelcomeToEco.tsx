import { Helmet } from "react-helmet"

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { News } from 'containers'



export const WelcomeToEco = () => {
    return (
        <>
            <Helmet>
                <title>Welcome to Eco</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <News />
            </SecondaryLayout>
        </>

    )
}