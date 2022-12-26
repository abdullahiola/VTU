export type DashboardType = {
  Component: React.ReactNode
}

export type HomePropsType = {
  route: string
}

export type HomeTabsPropsType = {
  setPath: React.Dispatch<React.SetStateAction<string>>
}

export type HomeTabDetailsPropsType = {
  currentTab: string | null
}