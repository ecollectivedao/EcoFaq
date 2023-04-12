import { SecondaryLayout } from "layouts/SecondaryLayout"

export const EcoDebitCard = () => {
  return (
    <SecondaryLayout>
      <section className="block-primary">
        <h2 className="block-primary__title">
          Eco debit card
        </h2>
        <p className="block-primary__subtitle">Краткое описание</p>
        <p className="block-primary__text">
        Вы можете использовать карту Eco Card практически везде, где принимаются карты Mastercard на территории США. В настоящее время Eco Card не работает за пределами США.
Вы будете зарабатывать 1,4 балла Eco за каждый потраченный доллар или за каждый доллар на счету и все это с вашего кошелька Eco, который приносит лучшее APY на рынке.
        </p>
        <h3 className="block-primary__sm">
        Использование карты Eco Card полностью бесплатно, вы не оплачиваете никакие расходы или комиссии.
        </h3>
      </section>
    </SecondaryLayout>
  )
}
