import { UsefulLinksList } from 'containers/UsefulLinksList/UsefulLinksList'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { Heading } from 'ui'

export const UsefulLinks = () => {
    return (
        <SecondaryLayout>
            <section className="block-primary">
                <Heading title='Полезные ссылки'>
                    Cсылки на все полезные ресурсы
                </Heading>
                <UsefulLinksList />
            </section>
        </SecondaryLayout>
    )
}

