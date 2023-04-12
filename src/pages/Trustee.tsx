import {SecondaryLayout} from 'layouts/SecondaryLayout'
import {TrusteeList} from 'containers'

export const Trustee = () => {
  return (
    <SecondaryLayout>
            <section className="block-primary">
            <h2 className="block-primary__title">
                    Trustee
                </h2>
                <p className="block-primary__subtitle">Участники trustee и их краткое интро</p>
                <TrusteeList/>
            </section>
    </SecondaryLayout>
  )
}

