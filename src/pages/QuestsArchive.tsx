import { QuestItem } from 'containers/QuestList/components/QuestItem/QuestItem'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { H3, Heading } from 'ui'

export const QuestsArchive = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">

        <Heading title='Архив Заданий'>
          Активности, которые ранее были
        </Heading>

        <H3>
          <a href="https://calendar.google.com/calendar/u/0?cid=dGxhNGxlaHF1b2g0ZjhvZzdncGxkMmljODRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ">Ссылка на календарь с активными заданиями</a>
        </H3>
        <ul className="quest-list">
          <QuestItem />
          <QuestItem />
        </ul>
      </section>

    </SecondaryLayout>
  )
}

