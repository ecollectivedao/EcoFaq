
import AmaList from "containers/AmaList/components/AmaList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Button, Heading, Img, Paragraph } from "ui"

import bg from 'assets/img/bg/21.png'

export const AmaRecords = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Helmet>
        <title>Association Grants</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Записи АМА'>
            Записи рабочих встреч и их перевод
          </Heading>

          <div className="flex-block">
            <div className="flex-block__text">
              {/* <AmaList /> */}
              <Paragraph>
              MikeWeb записывает рабочие встречи и предоставляет их перевод. Это позволяет участникам встречи иметь подробную информацию, новости, цели команды о проекте.
              </Paragraph>
              <Button noanim link='https://docs.google.com/document/d/1bGBhwMZd0dt3d_sNQSidZFnh25z7DgX-oSHH6wzTlgI/edit'>Подробнее</Button>
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
