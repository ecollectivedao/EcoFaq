import { UsefulLinksItem } from './UsefulLinksItem'

import './UsefulLinks.scss'
import { useEffect, useState } from 'react'
import { db } from 'config/firebaseConfig'
import { getDocs, collection, getDoc, doc } from 'firebase/firestore'

export const UsefulLinksList = () => {
  const [linksList, setLinksList] = useState({})

  useEffect(() => {
    const getResources = async () => {
      let quests: any = [];
      const docRef = doc(db, "useful links", "links");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        // console.log(docSnap.data());
        setLinksList(docSnap.data())
      } else {
        console.log("No such document!");
      }
    }
    getResources()
  }, [])

  console.log(Object.entries(linksList))

  const view = Object.entries(linksList).map((link: any[]) => {
    return <UsefulLinksItem key={link[1]} name={link[0]} link={link[1]}/>
  })

  return (
    <div className="links">
      <ul className="block-primary__list">
        {view}
      </ul>
    </div>
  )
}

