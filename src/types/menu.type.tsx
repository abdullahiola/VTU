export type MenuObjType = {
  title: string
  to: string
  Icon: React.ElementType
}

export type MenuType = {
  primary: MenuObjType[]
  secondary: MenuObjType[]
  tertiary: MenuObjType[]
}