import { MainPage } from 'pages/MainPage'
import { WelcomeToEco } from 'pages/WelcomeToEco'
import { Route, Routes } from 'react-router-dom'

export const Routings = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/welcome' element={<WelcomeToEco />} />
        </Routes>

    )
}