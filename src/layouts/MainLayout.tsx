import {Header} from 'containers'
import { News } from 'containers/News/News'

export const MainLayout = () => {
    return (
        <>
            <Header/>
            
            <main className="main">
                <News/>
            </main>
        </>
    )
}