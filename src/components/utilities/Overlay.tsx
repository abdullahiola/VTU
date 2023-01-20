import React from 'react'

type OverlayPropsType = {
  children?: React.ReactNode
  opacity: number
  top?: boolean
  onClick?: (e: React.MouseEvent) => void
}

const Overlay = ({children, opacity, onClick, top, ...props}: OverlayPropsType) => {
  return <div onClick={onClick} style={{backgroundColor: `rgba(0,0,0,${opacity})`, alignItems: top ? 'flex-start' : 'center'}} className={` toast-bg fixed inset-0 z-10 w-screen h-screen flex items-center justify-center`}>{children}</div>
}

export default Overlay