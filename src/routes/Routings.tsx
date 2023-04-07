import { MainPage, Discord, Tokens, TokensClaim, WelcomeToEco, WhereToBegin } from 'pages'
import { Route, Routes } from 'react-router-dom'

export const Routings = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/welcome' element={<WelcomeToEco />} />
            <Route path='/discord' element={<Discord />} />
            <Route path='/tokens' element={<Tokens />} />
            <Route path='/tokens-claim' element={<TokensClaim />} />
            <Route path='/where-to-begin' element={<WhereToBegin />} />
        </Routes>

    )
}