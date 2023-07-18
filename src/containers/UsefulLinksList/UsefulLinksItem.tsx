import { Li } from "ui"

type UsefulLinksItemProps = {
    name: string,
    link: string
}

export const UsefulLinksItem = ({name, link}: UsefulLinksItemProps) => {
    return (
        <Li>
            <a target='_blank' href={link} className="block-primary__link">{name}</a>
        </Li>
    )
}

