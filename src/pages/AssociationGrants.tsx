import { SecondaryLayout } from 'layouts/SecondaryLayout'
import React from 'react'
import { Helmet } from 'react-helmet'
import { A, H3, Heading, Li, Paragraph } from 'ui'

export const AssociationGrants = () => {
  return (
    <>
      <Helmet>
        <title>Association Grants</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">
          <Heading title='Association Grants'>
            Eco Association Grants Initiative
          </Heading>
          <Paragraph>
            Одним из приоритетов Eco Association в этом году будет поддержка сообщества в построении на основе ЕСО протокола
          </Paragraph>
          <Paragraph>
            Мы надеемся, что программа грантов EСО станет катализатором формирования нового типа ECOnomy - той, которая ориентирована на своих пользователей и работает в наших коллективных интересах. Гранты предоставляются командам или отдельным людям, которые возглавляют разработку продуктов, которые будут питать эту новую экосистему. Чтобы привлечь и стимулировать дальновидных участников, Eco Association будет финансировать критически важные инициативы, которые, по ее мнению, вносят значительный вклад в реализацию концепции ECO по созданию Web3 стимулирующего и координационного слоя, ориентированного на пользователей.
          </Paragraph>
          <Paragraph>
            Программа Eco Association Grants Initiative ECO направлена на ускорение роста ECOсистемы, чтобы предоставить людям по всему миру беспрепятственный доступ к финансовым услугам, основанным на криптовалютах. Финансирование будет выделяться перспективным разработчикам, командам и членам сообщества, которые вносят вклад в ключевые функции экосистемы, такие как разработка dApps, инфраструктуры и инструментария.
          </Paragraph>

          <H3>Список открытых грантов на которые вы можете подать заявку</H3>
          <Paragraph>
            [RFP] Мобильная оптимизация Управление сообществом dApp <A link='https://forums.eco.org/t/rfp-mobile-optimization-community-governance-dapp/221'>https://forums.eco.org/t/rfp-mobile-optimization-community-governance-dapp/221</A>
          </Paragraph>
          <Paragraph>
            Новые RFP будут публиковаться здесь: <A link='https://forums.eco.org/c/eco-association-issued-grants-and-requests-for-proposals/17'>https://forums.eco.org/c/eco-association-issued-grants-and-requests-for-proposals/17</A>
          </Paragraph>
          <Paragraph>Если вы хотите подать заявку на грант для работы над RFP, вы можете сделать это здесь: <A link='https://airtable.com/shreE8ALEty8IfGrl'>https://airtable.com/shreE8ALEty8IfGrl</A></Paragraph>
          <Paragraph>
            Процесс подачи заявок на грант всегда открыт, заявки будут оцениваться индивидуально на скользящей основе. Квалификация будет оцениваться на основе качества/актуальности заявки, опыта заявителя, репутации в сообществе, добавленной стоимости для экосистемы и др.
          </Paragraph>
          <Paragraph>
            Пожалуйста, помните о следующем при подаче заявки на грант:
          </Paragraph>
          <ul className="block-primary__list">
            <Li>
              Сосредоточьтесь на написании актуальной, качественной заявки.
            </Li>
            <Li>
              Включите подробные цели, этапы, KPI's, а также дорожную карту для вашего проекта
            </Li>
            <Li>
              Ваше приложение может выиграть от включения MVP (минимального жизнеспособного продукта).
            </Li>
            <Li>
              Поделитесь своим прошлым опытом и объясните, почему он имеет отношение к вашему проекту.
            </Li>
          </ul>
        </section>
      </SecondaryLayout>
    </>
  )
}
