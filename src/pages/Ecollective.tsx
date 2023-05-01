import { SecondaryLayout } from 'layouts/SecondaryLayout'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Heading, Paragraph } from 'ui'

export const Ecollective = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <>
            <Helmet>
                <title>Ecollective</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='Ecollective'>
                        Что это?
                    </Heading>
                    <Paragraph>
                        Сообщество, создающее и поддерживающее Eco - очень активная, вдохновляющая и целеустремленная группа, объединенная одной целью - ускорить внедрение и расширение сети Eco, поддержать надежную экосистему масштабируемых приложений и инструментов, а также других продуктов. <br />
                        Сообщество будет помогать строителям, которые осуществляют действия, соответствующие ожиданиям и миссии сообщества, как указано в Уставе.
                    </Paragraph>
                </section>
            </SecondaryLayout>
        </>
    )
}
