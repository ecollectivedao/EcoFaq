import {SecondaryLayout} from 'layouts/SecondaryLayout'
import {TrusteeList} from 'containers'
import { Heading } from 'ui'

export const Trustee = () => {
  return (
    <SecondaryLayout>
            <section className="block-primary">

              <Heading title='Trustee'>
                Участники trustee и их краткое интро
              </Heading>
              
                <TrusteeList/>
            </section>
    </SecondaryLayout>
  )
}

