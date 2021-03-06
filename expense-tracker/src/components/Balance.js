import React, { useContext } from 'react'
import { GlobalContext } from '../contextApi/GlobalState'

export const Balance = () => {

  const {transations} = useContext(GlobalContext)
  const amount =  transations.map(transation => transation.amount)
  const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h4>Your Balance</h4>
        <h1 id="balance">Rs {total}</h1>
    </>
  )
}
