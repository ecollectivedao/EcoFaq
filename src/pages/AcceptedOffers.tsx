import { AcceptedOffersList } from "containers/AcceptedOffersList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Heading } from "ui"
import { Helmet } from "react-helmet"
import { useEffect } from "react"

export const AcceptedOffers = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
}, [])
  return (
    <>
      <Helmet>
        <title>Принятые предложения</title>
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Принятые предложения'>
            В этом разделе вы можете ознакомится со всеми proposal, которые успешно прошли голосование
          </Heading>

          <AcceptedOffersList />

        </section>
      </SecondaryLayout>
    </>
  )
}