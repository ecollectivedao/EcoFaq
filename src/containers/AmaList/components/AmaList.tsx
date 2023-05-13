import React, { useEffect, useState } from 'react'
import { AmaItem } from './AmaItem'

import './Ama.scss'
import { db } from 'config/firebaseConfig'
import { DocumentData, collection, doc, getDoc, getDocs } from 'firebase/firestore'

const AmaList = () => {
  const [records, setRecords] = useState<any>([])

useEffect(() => {
  const getResources = async () => {
    let quests:any = [];
    const querySnapshot = await getDocs(collection(db, "AMA records"));
    querySnapshot.forEach((doc) => {
      quests.push(doc.data())
      // // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
    setRecords(quests)
  }
  getResources()
}, [])

console.log(records)

  const view = records?.map((record: any) => {
    return <AmaItem key={record.name} name={record.name} date={record.date} link={record.link}/>
  })

  return (
    <ul className="ama__list">
        {view}
    </ul>
  )
}

export default AmaList