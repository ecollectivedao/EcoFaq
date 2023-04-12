import {TrusteeItem} from '../TursteeItem/TrusteeItem'

import './TrusteeList.scss'

export const TrusteeList = () => {
  return (
    <ul className="trustee">
        <TrusteeItem/>
        <TrusteeItem/>
        <TrusteeItem/>
    </ul>
  )
}
