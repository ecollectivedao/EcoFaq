type AcceptedOfferType = {
    text: string,
    link: string
}

export const AcceptedOffer = ({text, link}: AcceptedOfferType) => {
    return (
        <li className="block-primary__list-item">
            <a href={link} target='_blank' className="block-primary__link">
                {text}
            </a>
        </li>
    )
}
