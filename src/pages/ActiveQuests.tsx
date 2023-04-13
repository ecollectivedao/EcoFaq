import { QuestList, TrusteeList } from 'containers'
import { SecondaryLayout } from 'layouts/SecondaryLayout'

export const ActiveQuests = () => {
  return (
    <SecondaryLayout>
            <section className="block-primary">
            <h2 className="block-primary__title">
                    Активные задания
                </h2>
                <p className="block-primary__subtitle">Активные конкурсы и мероприятия в сообществе discord благодаря которым вы можете заработать поинты и просто проявить свои способности.</p>

                <h3 className="block-primary__big">
                    <a href="https://calendar.google.com/calendar/u/0/embed?src=ecouserrr@gmail.com&ctz">Ссылка на календарь с активными заданиями</a>
                </h3>
                <QuestList/>

            </section>
    </SecondaryLayout>
  )
}
