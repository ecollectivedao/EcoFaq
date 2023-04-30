import { Helmet } from 'react-helmet'

import { UsefulLinksList } from 'containers/UsefulLinksList/UsefulLinksList'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { Heading } from 'ui'

export const UsefulLinks = () => {

    return (
        <>
            <Helmet>
                <title>Полезные ссылки</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='Полезные ссылки'>
                        Cсылки на все полезные ресурсы
                    </Heading>
                    <UsefulLinksList />
                </section>
            </SecondaryLayout>
        </>
    )
}

