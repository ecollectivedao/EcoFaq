import {Header} from 'containers'
import { News } from 'containers/News/News'
import { News2 } from 'containers/News_2/News_2'
import {Promo} from 'containers/Promo/Promo'
import {NewsCenter} from 'containers/NewsCenter/NewsCenter'
import {Footer} from 'containers/Footer/Footer'

import image from 'assets/img/4.png'
import { Investors } from 'containers/Investors/Investors'

export const MainLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='wrapper__gradient'>
            <Header/>
            
            <main className="main">
                <div className="container__body">
                  {children}
                </div>
            </main>
            <Footer/>
        </div>
    )
}