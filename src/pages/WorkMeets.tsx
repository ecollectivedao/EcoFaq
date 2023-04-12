import { SecondaryLayout } from 'layouts/SecondaryLayout'

import { CallSchedule } from 'containers/CallSchedule/CallSchedule'

export const WorkMeets = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">
        <h2 className="block-primary__title">
          Рабочие встречи
        </h2>
        <p className="block-primary__subtitle">Расписание созвонов с командой</p>

        <CallSchedule/>
        <CallSchedule/>
        <CallSchedule/>
      </section>
    </SecondaryLayout>
  )
}
