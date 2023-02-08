export type BaseFlowPropsType = {
  children: React.ReactNode
  width: number | 'screen'
  numOfPanels: number
  page: number
}

export type routedType = {
  route: string
}

export type AirtimeFlowPropsType = routedType

export type DataFlowPropsType = routedType

export type ActionPropsType = {
  Component: React.ReactNode
}

export type PhasePropsType = {
  
}

export type TransactionFlowPropsType = {
  children: React.ReactNode
}

export type TransactionFlowContextType = {
  transactionState: {
    provider: string;
    amount: string;
    number: string;
    name: string;
  }
  setTransactionState: React.Dispatch<React.SetStateAction<{
    provider: string;
    amount: string;
    number: string;
    name: string;
  }>>
  verified: boolean
  setVerified: React.Dispatch<React.SetStateAction<boolean>>
  phaseState: {
      one: boolean;
      two: boolean;
      three: boolean;
      four: boolean;
  }
  setPhaseState: React.Dispatch<React.SetStateAction<{
    one: boolean;
    two: boolean;
    three: boolean;
    four: boolean;
  }>>
}
 