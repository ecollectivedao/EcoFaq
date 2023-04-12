
import AmaList from "containers/AmaList/components/AmaList"
import { SecondaryLayout } from "layouts/SecondaryLayout"

export const AmaRecords = () => {
  return (
    <SecondaryLayout>
    <section className="block-primary">
      <h2 className="block-primary__title">
        Записи АМА
      </h2>
      <p className="block-primary__subtitle">Записи рабочих встреч и их перевод</p>
      
      <AmaList/>
    </section>
  </SecondaryLayout>
  )
}
