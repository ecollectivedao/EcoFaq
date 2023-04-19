import { Li } from "ui"

type AcceptedOfferType = {
    text: string,
    link: string
}

export const AcceptedOffer = ({text, link}: AcceptedOfferType) => {
    return (
        <Li>
            <a href={link} target='_blank' className="block-primary__link">
                {text}
            </a>
        </Li>
    )
}
