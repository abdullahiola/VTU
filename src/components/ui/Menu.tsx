import React, {useContext} from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { NavLink as Link } from 'react-router-dom'
import { menuNavData } from '../../assets/data/appdata'
import {MenuObjType, MenuType} from '../../types/menu.type'
import Logo from '../../assets/media/Frame 7264.svg'
import { LogoutIcon } from '../../assets/data/svg-icon'
import { AppContext } from '../../context/AppContext'

const Menu = () => {

  const {menuState, setMenuState} = useContext(AppContext)

  const menuListFn = (action: 'primary' | 'secondary' | 'tertiary') => {
    return (
      menuNavData[action as keyof MenuType].map(
        ({title, Icon, to}: MenuObjType) => {
          return (
            <li key={title}>
              <Link 
                onClick={() => {setMenuState && setMenuState(!menuState)}}
                to={to}
                className='flex items-center justify-start gap-x-5'
              >
                <Icon />
                <span className='text-base capitalize'>{title}</span>
              </Link>
            </li>
          )
        }
      )
    ) 
  }

  const menuBoxStyle: React.CSSProperties = {
    transition: 'all 600ms',
    transform: menuState ? 'translateX(0vw)' : 'translateX(-100vw)'
  }

  return (
    <div style={menuBoxStyle} className='bg-white shadow-xl fixed h-full top-0 left-0 w-screen overflow-x-hidden md:hidden'>
      <div  className='w-full h-full'>
        <div className='flex items-center justify-between p-6'>
          <div className='w-[100px]'><img src={Logo} /></div>
          <IoCloseSharp onClick={() => {setMenuState && setMenuState(false)}} fontSize="24px" className='cursor-pointer' />
        </div>
        <hr className='h-[1px] bg-gray-100 '/>
        <section>
          <div className='py-[28px] px-6'>
            <h6 className='mb-[26px]'>Hi, Khalid</h6>
            <ul className='flex flex-col gap-y-6'>
              {menuListFn('primary')}
            </ul>
          </div>
          <hr className='h-[3px] bg-gray-100 '/>
          <div className='py-[28px] px-6'>
            <ul className='flex flex-col gap-y-6'>
              {menuListFn('secondary')}
            </ul>
          </div>
          <hr className='h-[3px] bg-gray-100 '/>
          <div className='py-[28px] px-6'>
            <ul className='flex flex-col gap-y-6'>
              {menuListFn('tertiary')}
            </ul>
          </div>
        </section>
        <div className='mt-[39px] mb-[18px] px-6'>
          <button className='flex items-center justify-start'>
            <LogoutIcon />
            <span className='ml-5'>Log Out</span>
          </button>
        </div>
        <div className='pb-4 px-6 flex items-center'>
          <Link onClick={() => {setMenuState && setMenuState(!menuState)}} className='mr-4 text-gray-200 text-base hover:text-gray-300' to='/privacy'>Privacy</Link>
          <Link onClick={() => {setMenuState && setMenuState(!menuState)}} className='mr-4 text-gray-200 text-base hover:text-gray-300' to='/terms'>Terms</Link>
          <Link onClick={() => {setMenuState && setMenuState(!menuState)}} className='mr-4 text-gray-200 text-base hover:text-gray-300' to='/about'>About</Link>
        </div>
      </div>
    </div>
  )
}

export default Menu