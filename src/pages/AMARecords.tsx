
import AmaList from "containers/AmaList/components/AmaList"
import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Heading } from "ui"

export const AmaRecords = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">

        <Heading title='Записи АМА'>
          Записи рабочих встреч и их перевод
        </Heading>

        <AmaList />
      </section>
    </SecondaryLayout>
  )
}
