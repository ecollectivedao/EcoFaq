import { Helmet } from 'react-helmet'

import { UsefulLinksList } from 'containers/UsefulLinksList/UsefulLinksList'
import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { Heading, Img } from 'ui'
import { useEffect } from 'react'

import bg from 'assets/img/bg/20.png'

export const UsefulLinks = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
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

                    <div className="flex-block">
                        <div className="flex-block__text">
                            <UsefulLinksList />
                        </div>
                        <div className="flex-block__image">
                            <Img src={bg}></Img>
                        </div>
                    </div>
                </section>
            </SecondaryLayout>
        </>
    )
}

