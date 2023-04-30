import { MainPage, Discord, Tokens, TokensClaim, WelcomeToEco, WhereToBegin, DiscordRoles, CommunityManagment, AcceptedOffers, MonetaryPolicy, OffersAndVotes, Trustee, WorkMeets, AmaRecords, UsefulLinks, Whitepaper, EcoApp, EcoDebitCard, QuestsArchive, ActiveQuests, Ecollective, EcoID, AssociationGrants } from 'pages'
import { ConsensusBot } from 'pages/ConsensusBot'
import { EcoManagment } from 'pages/EcoManagment'
import { Layer3 } from 'pages/Layer3'
import { SeasonsEco } from 'pages/SeasonsEco'
import { TokensClaim2 } from 'pages/TokensClaim2'

import { Route, Routes } from 'react-router-dom'


export const Routings = () => {

    return (
        <Routes>
            <Route path='/' element={<MainPage />}/>
            <Route path='/welcome' element={<WelcomeToEco />} />
            <Route path='/discord' element={<Discord />} />
            <Route path='/tokens' element={<Tokens />} />
            <Route path='/tokens-claim' element={<TokensClaim />} />
            <Route path='/eco-id' element={<EcoID />} />
            <Route path='/where-to-begin' element={<WhereToBegin />} />
            <Route path='/discord-roles' element={<DiscordRoles />}/>
            <Route path='/accepted-offers' element={<AcceptedOffers />}/>

            <Route path='/seasons-eco' element={<SeasonsEco />}/>
            <Route path='/tokens-claim2' element={<TokensClaim2/>}/>
            <Route path='/layer-3' element={<Layer3 />}/>
            <Route path='/consensus-bot' element={<ConsensusBot />}/>

            <Route path='/quests-active' element={<ActiveQuests/>}/>
            <Route path='/association-grants' element={<AssociationGrants/>}/>

            <Route path='/monetary-policy' element={<MonetaryPolicy />}/>
            <Route path='/eco-managment' element={<EcoManagment />}/>
            <Route path='/community-managment' element={<CommunityManagment />}/>
            <Route path='/trustee' element={<Trustee />}/>

            {/* <Route path='/offers-and-votes' element={<OffersAndVotes />}/> */}
            {/* <Route path='/work-meets' element={<WorkMeets />}/> */}
            <Route path='/useful-links' element={<UsefulLinks/>}/>
            <Route path='/AMA-records' element={<AmaRecords/>}/>
            <Route path='/whitepaper' element={<Whitepaper/>}/>
            {/* <Route path='/Eco-app' element={<EcoApp/>}/>
            <Route path='/Eco-debit-card' element={<EcoDebitCard/>}/> */}
            <Route path='/quests-archive' element={<QuestsArchive/>}/>
            <Route path='/ecollective' element={<Ecollective/>}/>
        </Routes>

    )
}
