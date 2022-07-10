import React, {useContext} from 'react'
import { GlobalContext } from '../contextApi/GlobalState'

export const Transaction = ({transation}) => {
  const {delTrans} = useContext(GlobalContext)
    const sign = transation.amount > 0 ? '+' : ''
  return (
    <li className={transation.amount > 0 ? 'plus' : 'minus'}> {transation.text} <span>Rs {sign}{transation.amount}</span><button onClick={()=> delTrans(transation.id)} className="delete-btn">x</button> </li>
  )
}
