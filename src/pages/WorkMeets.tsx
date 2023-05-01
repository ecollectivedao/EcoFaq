import { SecondaryLayout } from 'layouts/SecondaryLayout'

import { CallSchedule } from 'containers/CallSchedule/CallSchedule'
import { Heading } from 'ui'
import { useEffect } from 'react'

export const WorkMeets = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <SecondaryLayout>
      <section className="block-primary">
        <Heading title='Рабочие встречи'>
        Расписание созвонов с командой
        </Heading>

        <CallSchedule/>
        <CallSchedule/>
        <CallSchedule/>
        <CallSchedule/>
        <CallSchedule/>
        
      </section>
    </SecondaryLayout>
  )
}
