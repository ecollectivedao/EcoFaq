import {Header} from 'containers'
import { News } from 'containers/News/News'
import { News2 } from 'containers/News_2/News_2'
import {Promo} from 'containers/Promo/Promo'
import {NewsCenter} from 'containers/NewsCenter/NewsCenter'

export const MainLayout = () => {
    return (
        <>
            <Header/>
            
            <main className="main">
                <div className="container__body">
                    <Promo/>
                    <News/>
                    <News2/>
                    <NewsCenter/>
                </div>
            </main>
        </>
    )
}