import { TrusteeList } from 'containers'
import { QuestItem } from 'containers/QuestList/components/QuestItem/QuestItem'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import React from 'react'

export const QuestsArchive = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">
        <h2 className="block-primary__title">
        Архив Заданий

        </h2>
        <p className="block-primary__subtitle">Активности, которые ранее были</p>
        <h3 className="block-primary__big">
                    <a href="https://calendar.google.com/calendar/u/0?cid=dGxhNGxlaHF1b2g0ZjhvZzdncGxkMmljODRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Ссылка на календарь с активными заданиями</a>
                </h3>
        <ul className="quest-list">
          <QuestItem />
          <QuestItem />
        </ul>
      </section>

    </SecondaryLayout>
  )
}

