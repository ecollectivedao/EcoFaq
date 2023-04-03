import { MainLayout } from "layouts/MainLayout"
import {Promo} from 'containers/Promo/Promo'
import { Investors } from "containers/Investors/Investors"

export const MainPage = () => {
    return (
        <MainLayout>
            <Promo/>
            <Investors/>
        </MainLayout>
    )
}