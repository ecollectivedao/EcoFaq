import { useEffect } from 'react'
import {TrusteeItem} from '../TursteeItem/TrusteeItem'

import { useDispatch, useSelector } from 'react-redux'
import {getTrustee} from '../../store/TrusteeThunk'

import './TrusteeList.scss'
import { AppDispatch, RootState } from 'store/store'

export const TrusteeList = () => {

  const dispatch = useDispatch<AppDispatch>()
  const trustee = useSelector((state: RootState) => state.trusteeReducer.trustee)

  useEffect(() => {
    dispatch(getTrustee())
  }, [])

  console.log(trustee)
  // useEffect(() => {
  //       console.log(trustee)
  // },[trustee])

    const view = trustee?.map(item => {
      return <TrusteeItem avatar={item.avatar} name={item.name} discord={item.discord} linkedin={item.linkedin} info={item.info} key={item.name}/>
    })

  return (
    <ul className="trustee">
        {view}
    </ul>
  )
}
