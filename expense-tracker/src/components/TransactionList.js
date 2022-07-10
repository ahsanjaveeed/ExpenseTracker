import React, { useContext } from 'react'
import { GlobalContext } from '../contextApi/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {

  const {transations} = useContext(GlobalContext)

  return (
    <>
      <h3>History</h3>
      <ul  className="list">
        {transations.map(transation =>(
          <Transaction key={transation.id} transation={transation} />
          ))}
      </ul>
    </>
  )
}
