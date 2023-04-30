import { Helmet } from 'react-helmet'

import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { TrusteeList } from 'containers'
import { Heading } from 'ui'

export const Trustee = () => {
  return (
    <>
      <Helmet>
        <title>Trustee</title>
        <meta name="description" content="Eco" />
        <meta name="keywords" content="eco, crypto" />
      </Helmet>
      <SecondaryLayout>
        <section className="block-primary">

          <Heading title='Trustee'>
            Участники trustee и их краткое интро
          </Heading>

          <TrusteeList />
        </section>
      </SecondaryLayout>
    </>
  )
}

