import React, { useContext, useEffect } from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { NavLink as Link } from 'react-router-dom'
import { menuNavData } from '../../assets/data/appdata'
import { NotificationAlertIcon, NotificationIcon, ProfileIcon, QuestionIcon, LogoutIcon } from '../../assets/data/svg-icon'
import Logo from '../../assets/media/Frame 7264.svg'
import { AppContext } from '../../context/AppContext'

const Nav = () => {

  const {notification, menuState, setMenuState, dashboardMenuState, setDashboardMenuState} = useContext(AppContext)
  const name = 'Khalid'

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
      <div className='hidden relative py-[30px] px-12 gap-x-6 items-center justify-between md:flex'>
        {
          dashboardMenuState &&
            <aside className='absolute bg-[#fff] shadow-md z-10 rounded-xl right-[20px] -bottom-0 translate-y-full pt-8 pb-11'>
              <h6 className='text-[20px] font-semibold pb-3 px-8'>Hi, {name}</h6>
              <div className='px-8'><hr className=' h-[2px] bg-[#FAFAFA]' /></div>
              <ul className='pt-4 pb-8'>
                {
                  menuNavData.secondary.map(({Icon, title, to}, index) => {
                    return (
                      <li onClick={() => {setDashboardMenuState && setDashboardMenuState(!dashboardMenuState)}} key={index}><Link to={to} className='menu__nav flex py-[14px] items-center justify-start px-8'><Icon /><span className='ml-[18px] font-semibold'>{title}</span></Link></li>
                    )
                  })
                }
              </ul>
              <div className='px-8'><hr className=' h-[2px] bg-[#FAFAFA]' /></div>
              <ul className='pt-6 pb-8'>
              {
                  menuNavData.tertiary.map(({Icon, title, to}, index) => {
                    return (
                      <li onClick={() => {setDashboardMenuState && setDashboardMenuState(!dashboardMenuState)}} key={index}><Link to={to} className='menu__nav flex py-[14px] items-center justify-start px-8'><Icon /><span className='ml-[18px] font-semibold'>{title}</span></Link></li>
                    )
                  })
                }
              </ul>
              <div className='flex items-center justify-start px-8'><LogoutIcon /><span className='text-red px-8'>Log Out</span></div>
            </aside>
        }
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
              <div onClick={() => {setDashboardMenuState && setDashboardMenuState(!dashboardMenuState)}} className='nav cursor-pointer'><ProfileIcon /></div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Nav