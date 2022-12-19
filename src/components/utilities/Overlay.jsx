import React from 'react'

const Overlay = ({children, opacity, onClick, ...props}) => {
  return <div onClick={onClick} style={{backgroundColor: `rgba(0,0,0,${opacity})`}} className=' toast-bg fixed inset-0 z-10 w-screen h-screen flex items-center justify-center'>{children}</div>
}

export default Overlay