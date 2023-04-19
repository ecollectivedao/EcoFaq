import { SecondaryLayout } from "layouts/SecondaryLayout"
import { H3, Heading, Paragraph } from "ui"

export const EcoDebitCard = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">

        <Heading title='Eco debit card'>
        Краткое описание
        </Heading>
        <Paragraph>
        Вы можете использовать карту Eco Card практически везде, где принимаются карты Mastercard на территории США. В настоящее время Eco Card не работает за пределами США.
Вы будете зарабатывать 1,4 балла Eco за каждый потраченный доллар или за каждый доллар на счету и все это с вашего кошелька Eco, который приносит лучшее APY на рынке.
        </Paragraph>
        <H3>
        Использование карты Eco Card полностью бесплатно, вы не оплачиваете никакие расходы или комиссии.
        </H3>
      </section>
    </SecondaryLayout>
  )
}
