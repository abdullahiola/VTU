import React, { useContext, useEffect, useRef } from 'react'
import Logo from '../../assets/media/Frame 7264.png'
import { AppContext } from '../../context/AppContext'

const LogoHeader = () => {

  const {headerLogoHeight, setHeaderLogoHeight} = useContext(AppContext)

  const height = useRef(0)

  useEffect(() => {
    setHeaderLogoHeight(height.current.offsetHeight)

  }, [headerLogoHeight])
  

  return (
    <div ref={height} className=' flex items-center justify-center py-6'>
        <img className=' w-[144px]' src={Logo}/>
    </div>
  )
}

export default LogoHeader