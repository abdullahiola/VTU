import React, { createContext, useState } from 'react'
import { TransactionFlowContextType, TransactionFlowPropsType } from '../types/flow.type'


export const TransactionFlowContext = createContext({} as TransactionFlowContextType)
const TransactionFlowProvider = ({children}: TransactionFlowPropsType) => {

  const [transactionState, setTransactionState] = useState({
    provider: '',
    amount: '',
    number: '',
    name: '',
  })
  const [verified, setVerified] = useState(false)
  const [phaseState, setPhaseState] = useState({"one": true, "two": false, "three": false, "four": false})

  return (
    <TransactionFlowContext.Provider value={{transactionState, setTransactionState, verified, setVerified, phaseState, setPhaseState}}>
      {children}
    </TransactionFlowContext.Provider>
  )
}

export default TransactionFlowProvider
