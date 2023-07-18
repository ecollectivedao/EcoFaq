import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

import { SecondaryLayout } from "layouts/SecondaryLayout"
import { A, H3, Heading, Img, Li, Paragraph } from "ui"
import { useEffect } from "react"

import bg from 'assets/img/bg/18.png'


export const TokensClaim2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Клейм токенов второй фазы</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Клейм токенов'>
            Клейм токенов второй фазы
          </Heading>

          <div className="flex-block">
            <div className="flex-block__text">
              <Paragraph>
                В данном разделе описано как вы сможете забрать свои токены заработанные в первом сезоне. Обратите внимание, процесс клейма токенов до лаунча ЕСО описан <Link to='/tokens-claim'>ТУТ</Link>
              </Paragraph>

              <Paragraph>
                Для клейма токенов обязательно необходимо наличие <Link to='/eco-id'>ECO ID</Link>
              </Paragraph>

              <H3>Официальный механизм получения вознаграждения $ECO для 1 сезона</H3>

              <Paragraph>

                dApp для подачи заявок.
              </Paragraph>

              <Paragraph>
                Пожалуйста, помните, что торопиться с заявлением не стоит. Вы сможете конвертировать вознаграждения одного или нескольких сезонов в любое время через dApp (так что если у вас сейчас небольшой баланс points и вы хотите накопить, вы можете это сделать!)
              </Paragraph>

              <Paragraph>
                Если вам нужна помощь, как всегда, обращайтесь к нам в канал 🆘support.
              </Paragraph>

            </div>
            <div className="flex-block__image">
              <Img src={bg}></Img>
            </div>
          </div>


        </section>
      </SecondaryLayout>
    </>
  )
}
