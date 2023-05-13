import { Li } from "ui"
import { A } from "ui/A/A"


type AmaItem = {
  name:string,
  date: string,
  link:string
}

export const AmaItem = ({name, date, link}: AmaItem) => {
  return (
    <Li>
      <p className="ama-item__title">
        {name}
      </p>
      <p className="ama-item__date">{date}</p>
      <A link={link}>
        {link}
      </A>
    </Li>
  )
}
