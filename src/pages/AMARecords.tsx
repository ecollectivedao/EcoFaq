
import AmaList from "containers/AmaList/components/AmaList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { useEffect } from "react"
import { Helmet } from "react-helmet"
import { Heading } from "ui"

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

          <AmaList />
        </section>
      </SecondaryLayout>
    </>
  )
}
