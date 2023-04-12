import schedule from 'assets/img/schedule.png'

import './CallSchedule.scss'

export const CallSchedule = () => {
  return (
    <div className="call-schedule">
        <div className="block-primary__mixed">
          <img src={schedule} alt="schedule" className="block-primary__icon" />
          <p className="block-primary__bold">Open Office Hours - каждый вторник в 18:00 МСК/3 pm UTC
          </p>
        </div>

        <p className="block-primary__text">
          в голосовом канале Office Hours Voice с участием Dave | Eco#2900, на созвоне можно обсудить все что касается коммьюнити: любые идеи, предложения, ивенты, онбординг, роли и т.п. Все вопросы и обсуждения в канале 🤝community-office-hours
        </p>
    </div>
  )
}
