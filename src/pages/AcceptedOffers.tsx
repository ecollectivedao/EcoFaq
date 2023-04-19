import { AcceptedOffersList } from "containers/AcceptedOffersList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Heading } from "ui"

export const AcceptedOffers = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">

      <Heading title='Принятые предложения'>
        В этом разделе вы можете ознакомится со всеми proposal, которые успешно прошли голосование
      </Heading>
      
      <AcceptedOffersList/>
     
    </section>
    </SecondaryLayout>
  )
}