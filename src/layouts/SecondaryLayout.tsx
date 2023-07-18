import {Header, JoinUs} from 'containers'
import {Footer} from 'containers/Footer/Footer'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/store'

// 

export const SecondaryLayout = ({children}: {children: React.ReactNode}) => {

    return (
        <>
            <Header/>
            
            <main className='main'>
                <div className="container__body">
                  {children}
                </div>
                <JoinUs/>
            </main>
            <Footer/>
        </>
    )
}