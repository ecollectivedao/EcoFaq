import { useEffect } from 'react'
import {TrusteeItem} from '../TursteeItem/TrusteeItem'

import { useDispatch, useSelector } from 'react-redux'
import {getTrustee} from '../../store/TrusteeThunk'

import './TrusteeList.scss'
import { AppDispatch, RootState } from 'store/store'
import { Loader } from 'ui'

export const TrusteeList = () => {

  const dispatch = useDispatch<AppDispatch>()
  const {trustee, loading} = useSelector((state: RootState) => state.trusteeReducer)

  useEffect(() => {
    dispatch(getTrustee())
  }, [])

    const view = trustee?.map(item => {
      return <TrusteeItem avatar={item.avatar} name={item.name} discord={item.discord} twitter={item.twitter} linkedin={item.linkedin} info={item.info} key={item.name}/>
    })

  return (
    <ul className="trustee">
        {loading ? <Loader/> : view}
    </ul>
  )
}
