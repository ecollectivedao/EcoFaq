import { SecondaryLayout } from "layouts/SecondaryLayout"
import { Helmet } from "react-helmet"
import { A, H3, Heading, Li, Paragraph } from "ui"


export const EcoID = () => {
    return (
        <>
            <Helmet>
                <title>ECO ID</title>
                <meta name="description" content="Eco" />
                <meta name="keywords" content="eco, crypto" />
            </Helmet>
            <SecondaryLayout>
                <section className="block-primary">
                    <Heading title='Eco ID'>
                        Детали системы идентификации и репутации Eco ID NFT
                    </Heading>

                    <Paragraph>
                        Репутация и система идентификации являются критически важными для хорошо функционирующих обществ, экономик и механизмов управления. ЕСО стремится быть всем этим, и поэтому необходимо создать основы репутации.
                    </Paragraph>

                    <Paragraph>
                        Eco ID - это первый шаг к ответу EСО на вопросы репутации и идентичности.
                    </Paragraph>
                    <ul className="block-primary__list">
                        <Li>
                            Любой человек может иметь любую точку зрения или данные о репутации другого человека.
                        </Li>
                        <Li>
                            Каждый может прислушаться к любым точкам зрения или данным, которые он считает достоверными.
                        </Li>
                    </ul>

                    <Paragraph>
                        Eco ID представляют собой примитивы, разработанные для создания полностью децентрализованной и не требующей разрешения системы идентификации, которая является простой, но максимально гибкой. По своей сути, система Eco ID обеспечивает общий стандарт для оценки личности и репутации, которая заверяется верификаторами, а затем используется любыми сторонами, заинтересованными в этих оценках.
                    </Paragraph>


                    <Paragraph>
                        Личность и репутация формируются путем объединения множества отдельных точек данных, при этом другие могут выборочно обращать внимание на определенные из них. Eco ID позволяют накапливать такие точки данных и тем самым обеспечивают путь к более надежной идентификации и репутации на цепочке.
                    </Paragraph>

                    <H3>Технические детали</H3>

                    <Paragraph>
                        EСО ID - это непередаваемые НФТ, соответствующие стандарту ERC-721. Каждый NFT содержит произвольное факты, подтвержденные по крайней мере одним верификатором, а также список верификаторов, подтвердивших этот факт. Факты может содержать любые данные, которые человек или коллектив может захотеть связать с публичным адресом Ethereum.
                    </Paragraph>

                    <Paragraph>
                        В системе Eco ID есть три типа участников, и любой человек может выступать в качестве любого из них:
                    </Paragraph>

                    <ul className="block-primary__list">
                        <Li>
                            Верификаторы подтверждают в сети определенные данные о конечных пользователях
                        </Li>
                        <Li>
                            Конечные пользователи запрашивают подтверждения у верификаторов
                        </Li>
                        <Li>
                            Читатели используют данные о конечных пользователях для своих собственных целей.
                        </Li>
                    </ul>

                    <Paragraph>
                        Чтобы создать идентификатор Eco ID для данного факта, конечный пользователь должен сначала найти верификатора, готового подтвердить этот факт. После того, как верификатор подтвердил факт, конечный пользователь может чеканить один непередаваемый НФТ с фактом в ввиде "данных" НФТ и первоначальным верификатором в свойстве "верификатор" НФТ.
                    </Paragraph>

                    <Paragraph>
                        Система NFT предоставляет два типа аттестации: отзывную и не отзывную.
                    </Paragraph>

                    <ul className="block-primary__list">
                        <Li>
                            Отзывная аттестация позволяет проверяющему отозвать свою аттестацию в любое время, что может быть уместно для аттестации, которая носит эфемерный характер, например, подписка на услугу.
                        </Li>
                        <Li>
                            Неотзывная аттестация не может быть отозвана ни владельцем НФТ, ни верификатором, и подходит для утверждений, требующих неизменности.
                        </Li>
                    </ul>

                    <Paragraph>
                        Система вводит экономические стимулы для участия верификаторов в системе, позволяя как первоначальному верификатору, так и дополнительным верификаторам взимать плату за заверение. Верификаторы и конечные пользователи должны заранее договориться о цене за аттестацию, которая должна быть оплачена в ECO.
                    </Paragraph>

                    <H3>Ресурсы</H3>
                    <Paragraph>
                        Вы можете найти репозиторий eco.id <A link='https://github.com/helix-foundation/eco-id'>здесь</A>, контракт <A link='https://etherscan.io/address/0x5bc2fa9426e882710d055c1a60f8cc93a31edc58'>здесь</A>, а коллекцию ECO ID NFT <A link='https://opensea.io/collection/ecoid'>здесь</A>.
                    </Paragraph>



                </section>
            </SecondaryLayout>
        </>

    )
}
