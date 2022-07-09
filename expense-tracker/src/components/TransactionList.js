import React from 'react'

export const TransactionList = () => {
  return (
    <>
      <h3>History</h3>
      <ul id="list" class="list">
        <li class="minus"> Cash <span>Rs -400</span><button class="delete-btn">x</button> </li>
        <li class="plus"> Cash <span>Rs 100</span><button class="delete-btn">x</button> </li>
      </ul>
    </>
  )
}
