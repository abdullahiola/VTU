import React, { useContext } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { NavLink as Link } from 'react-router-dom'
import { NotificationAlertIcon, NotificationIcon, ProfileIcon, QuestionIcon } from '../../assets/data/svg-icon'
import Logo from '../../assets/media/Frame 7264.svg'
import { AppContext } from '../../context/AppContext'

const Nav = () => {

  const {notification, menuState, setMenuState} = useContext(AppContext)

  return (
    <header>
      <div className='flex p-6 items-center justify-between md:hidden'>
        <div className=' w-[100px]'><Link to='/' className='w-full h-full'><img src={Logo} className='w-full h-full' /></Link></div>
        <div>
          <RxHamburgerMenu 
            fontSize='22px'
            className='cursor-pointer'
            onClick={() => {setMenuState && setMenuState(!menuState)}}
           />
        </div>
      </div>
      <div className='hidden py-[30px] px-12 gap-x-6 items-center justify-between md:flex'>
        <div className=' w-[144px]'><Link to='/' className='w-full h-full'><img src={Logo} className='w-full h-full' /></Link></div>
        <nav className='w-2/3'>
          <ul className='flex items-center justify-between'>
            <li><Link className='nav__link text-base font-semibold capitalize py-3 hover:text-green-800' to='/'>Home</Link></li>
            <li><Link className='nav__link text-base font-semibold capitalize py-3 hover:text-green-800' to='/wallet'>Wallet</Link></li>
            <li><Link className='nav__link text-base font-semibold capitalize py-3 hover:text-green-800' to='/transactions'>Transactions</Link></li>
            <li><Link className='nav__link text-base font-semibold capitalize py-3 hover:text-green-800' to='/beneficiaries'>Beneficiaries</Link></li>
            <li><Link className='nav__link text-base font-semibold capitalize py-3 hover:text-green-800' to='/analytics'>Analytics</Link></li>
          </ul>
        </nav>
        <div>
          <ul className='flex items-center justify-between gap-x-[14px]'>
            <li>
              <Link to='/notifications'>{ (notification &&notification > 0 ) ? <NotificationAlertIcon /> : <NotificationIcon />}</Link>
            </li>
            <li>
              <Link to='/help'><QuestionIcon /></Link>
            </li>
            <li>
              <Link to='/profile'><ProfileIcon /></Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav