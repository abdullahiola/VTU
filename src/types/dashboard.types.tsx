export type DashboardType = {
  Component: React.ComponentType
}

export type HomeTabsPropsType = {
  path: string
  urlPath: string
  setPath: React.Dispatch<React.SetStateAction<string>>
}