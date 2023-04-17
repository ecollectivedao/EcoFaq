import { MainPage, Discord, Tokens, TokensClaim, WelcomeToEco, WhereToBegin, DiscordRoles, CommunityManagment, AcceptedOffers, MonetaryPolicy, OffersAndVotes, Trustee, WorkMeets, AmaRecords, UsefulLinks, Whitepaper, EcoApp, EcoDebitCard, QuestsArchive, ActiveQuests } from 'pages'

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
            <Route path='/discord-roles' element={<DiscordRoles />}/>
            <Route path='/accepted-offers' element={<AcceptedOffers />}/>
            <Route path='/monetary-policy' element={<MonetaryPolicy />}/>
            <Route path='/offers-and-votes' element={<OffersAndVotes />}/>
            <Route path='/trustee' element={<Trustee />}/>
            <Route path='/work-meets' element={<WorkMeets />}/>
            <Route path='/community-managment' element={<CommunityManagment />}/>
            <Route path='/useful-links' element={<UsefulLinks/>}/>
            <Route path='/AMA-records' element={<AmaRecords/>}/>
            <Route path='/whitepaper' element={<Whitepaper/>}/>
            <Route path='/Eco-app' element={<EcoApp/>}/>
            <Route path='/Eco-debit-card' element={<EcoDebitCard/>}/>
            <Route path='/quests-active' element={<ActiveQuests/>}/>
            <Route path='/quests-archive' element={<QuestsArchive/>}/>
        </Routes>

    )
}
