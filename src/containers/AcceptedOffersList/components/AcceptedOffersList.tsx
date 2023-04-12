import { useEffect, useState } from "react"
import {DocumentData, doc, getDoc} from 'firebase/firestore'

import {db} from 'config/firebaseConfig'
import { AcceptedOffer } from "./AcceptedOffer"

export const AcceptedOffersList = () => {
    const [offers, setOffers] = useState<any>([])

    useEffect(() => {
        const getData = async () => {
            const ref = doc(db, 'offers', 'accepted')
            const res = await getDoc(ref)

            if (res.exists()) {
                setOffers(Object.entries(res.data()).sort())
            }
        }

        getData()
    }, [])

    const view = offers?.map((offer:DocumentData) => {
        return(
            <AcceptedOffer key={offer[0]} text={offer[0]} link={offer[1]}/>
        )
    })

  return (
    <ol className="block-primary__list-number">
        {view}
    </ol>
  )
}
