import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/media/Frame 7264.svg'
const LogoHeader = () => {

  return (
    <div className=' flex items-center justify-center py-6'>
      <Link to='/' className='block'>
        <img className=' w-[144px]' src={Logo}/>
      </Link>
    </div>
  )
}

export default LogoHeader