import { QuestList, TrusteeList } from 'containers'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { H3, Heading } from 'ui'

import bg from 'assets/img/bg/03.png'

export const ActiveQuests = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
     <Helmet>
        <title>Активные задания</title>
      </Helmet>
      <SecondaryLayout>
            <section className="block-primary">

                <Heading title='Активные задания'>
                Активные конкурсы и мероприятия в сообществе discord благодаря которым вы можете заработать поинты и просто проявить свои способности.
                </Heading>

                <img className='poster-bg' src={bg} alt="poster" />

                <H3>
                    <a target='_blank' href="https://calendar.google.com/calendar/u/0/embed?src=ecouserrr@gmail.com&ctz">Ссылка на календарь с активными заданиями</a>
                </H3>
                <QuestList/>

            </section>
    </SecondaryLayout>
    </>
  )
}
