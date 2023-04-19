import { SecondaryLayout } from 'layouts/SecondaryLayout'

import { CallSchedule } from 'containers/CallSchedule/CallSchedule'
import { Heading } from 'ui'

export const WorkMeets = () => {
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
