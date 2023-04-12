import { AcceptedOffersList } from "containers/AcceptedOffersList"
import { SecondaryLayout } from "layouts/SecondaryLayout"

export const AcceptedOffers = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">
      <h2 className="block-primary__title">
        Принятые предложения
        </h2>
      <p className="block-primary__subtitle">
        В этом разделе вы можете ознакомится со всеми proposal, которые успешно прошли голосование
      </p>
      
      <AcceptedOffersList/>
     
    </section>
    </SecondaryLayout>
  )
}