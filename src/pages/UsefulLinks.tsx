import { UsefulLinksList } from 'containers/UsefulLinksList/UsefulLinksList'
import { SecondaryLayout } from 'layouts/SecondaryLayout'

export const UsefulLinks = () => {
    return (
        <SecondaryLayout>
            <section className="block-primary">
                <h2 className="block-primary__title">
                Полезные ссылки
                </h2>
                <p className="block-primary__subtitle">Cсылки на все полезные ресурсы</p>
                <UsefulLinksList />
            </section>
        </SecondaryLayout>
    )
}

