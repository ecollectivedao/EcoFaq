import { useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore";


import { QuestItem } from '../QuestItem/QuestItem'
import { db } from 'config/firebaseConfig'

import './QuestList.scss'

export const QuestList = () => {

  const [questList, setQuestList] = useState([])

  useEffect(() => {
    const getResources = async () => {
      let quests:any = [];
      const querySnapshot = await getDocs(collection(db, "quests"));
      querySnapshot.forEach((doc) => {
        quests.push(doc.data())
        // // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      setQuestList(quests)
    }
    getResources()
  }, [])


  const view = questList.map((item: any) => {
   return  <QuestItem key={item.name} rules={item.rules} extralink={item.extralink} link={item.link} name={item.name} description={item.description} award={item.award} />
  })


  return (
    <ul className="quest-list">
      {view}
    </ul>
  )
}