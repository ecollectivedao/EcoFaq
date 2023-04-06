import {Header} from 'containers'
import {Footer} from 'containers/Footer/Footer'

// 

export const SecondaryLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
            <Header/>
            
            <main className="main">
                <div className="container__body">
                  {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}