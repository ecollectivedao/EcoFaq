import { UsefulLinksItem } from './UsefulLinksItem'

import './UsefulLinks.scss'
import { useEffect, useState } from 'react'
import { db } from 'config/firebaseConfig'
import { getDocs, collection, getDoc, doc } from 'firebase/firestore'
import { H4 } from 'ui/H4/H4'

export const UsefulLinksList = () => {
  const [appLinksList, setAppLinksList] = useState({})
  const [protocolLinksList, setProtocolLinksList] = useState({})

  useEffect(() => {
    const getResources = async () => {
      let quests: any = [];
      const docRef = doc(db, "useful links", "links");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log(docSnap.data());
        setAppLinksList(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }


    const getResources2 = async () => {
      let quests: any = [];
      const docRef = doc(db, "useful links", "protocol links");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProtocolLinksList(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }

    getResources()
    getResources2()
  }, [])


  const appLinks = Object.entries(appLinksList).map((link: any[]) => {
    return <UsefulLinksItem key={link[1]} name={link[0]} link={link[1]}/>
  })

  const protocolLinks = Object.entries(protocolLinksList).map((link: any[]) => {
    return <UsefulLinksItem key={link[1]} name={link[0]} link={link[1]}/>
  })


  return (
    <div className="links">
      <H4>App links</H4>
      <ul className="block-primary__list">
        {appLinks}
      </ul>

      <H4>Protocol links</H4>
      <ul className="block-primary__list">
        {protocolLinks}
      </ul>
    </div>
  )
}

