import { Header } from 'containers'
import { Footer } from 'containers/Footer/Footer'

export const MainLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div className='wrapper__gradient'>
            <Header />
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <main className="main">

                <div className="container__body">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}