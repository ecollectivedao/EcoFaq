import { QuestItem } from '../QuestItem/QuestItem'

import './QuestList.scss'

export const QuestList = () => {
  return (
    <ul className="quest-list">
        <QuestItem/>
        <QuestItem/>
        <QuestItem/>
    </ul>
  )
}