import { MainLayout } from "layouts/MainLayout"
import { Promo } from 'containers/Promo/Promo'
import { Investors } from "containers/Investors/Investors"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export const MainPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Eco</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <MainLayout>
                <Promo />
                <Investors />
            </MainLayout>
        </>
    )
}