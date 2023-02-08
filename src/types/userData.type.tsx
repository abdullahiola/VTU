export type UserDataContextPropsType = {
  children: React.ReactNode
}

export type UserDataContextValueType = {
  userEmail: string,
  setUserEmail: React.Dispatch<React.SetStateAction<string>>
}