export type CardPropsType = {
  bgColor: string
  icon: any
  title: string
  detail?: string
  onClick: () => void
}

export type TransactionCardPropsType = {
  bgColor: string
  bgImg: any
  provider: string
  amount: string
  name: string
  number: string
}