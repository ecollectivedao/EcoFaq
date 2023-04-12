import { UsefulLinksItem } from './UsefulLinksItem'

import './UsefulLinks.scss'

export const UsefulLinksList = () => {
  return (
    <div className="links">
            <ul className="block-primary__list">
                <UsefulLinksItem />
                <UsefulLinksItem />
                <UsefulLinksItem />
                <UsefulLinksItem />
            </ul>
        </div>
  )
}

