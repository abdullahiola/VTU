import React, { useState, Fragment } from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import { NavLink as Link } from 'react-router-dom'
import { HomePropsType, HomeTabsPropsType, HomeTabDetailsPropsType } from '../../types/dashboard.types'
import BuyAirtime from '../ui/BuyAirtime'
import BuyData from '../ui/BuyData'
import Air2Cash from '../ui/Air2Cash'

const Home = ({route}: HomePropsType) => {

  const [path, setPath] = useState('buy-airtime')

  return (
    <div className='px-6 md:px-12'>
      <FundDetail />
      <Tabs setPath={setPath} />
      <div>
        <TabDetailControl currentTab={route} />
      </div>
    </div>
  )
}

export const FundDetail = () => {

  const balance = 245750.57
  const formattedBalance = balance.toLocaleString().split('.')
  const wholePart = formattedBalance[0]
  const decimalPart = formattedBalance[1]

  return (
    <section className='flex items-end justify-between pt-[29.5px] pb-24 md:items-center'>
      <div>
        <p className='text-sm mb-[2px] md:text-base md:mb-[14px]'>Total Balance</p>
        <h4>₦{wholePart}<span className='text-gray-500'>.{decimalPart}</span></h4>
      </div>
      <div>
        <AiOutlinePlus fontSize='22px' className='text-[#000] cursor-pointer mb-2 md:hidden' />
        <button type='button' className='hidden py-3 px-6 bg-green-600 text-white rounded-lg hover:bg-green-700 md:block'>Fund Wallet</button>
      </div>
    </section>
  )
}

export const Tabs = ({setPath}: HomeTabsPropsType) => {


  return (
    <div className='overflow-x-scroll'>
      <nav className='flex gap-x-3 items-center justify-start py-2 px-1 h-full w-max'>
        <Link
          onClick={() => {setPath && setPath('buy-airtime')}}
          to='/'
          className='home__tab px-1 py-2 border-2 border-[transparent] rounded-[1100px] text-base text-dark font-semibold'>
            Buy Airtime
        </Link>
        <Link 
          onClick={() => {setPath && setPath('buy-data')}}
          to='/buy-data' 
          className='home__tab px-1 py-2 border-2 border-[transparent] rounded-[1100px] text-base text-dark font-semibold'>
            Buy Data
        </Link>
        <Link 
          onClick={() => {setPath && setPath('air-to-cash')}} 
          to='/air-to-cash' 
          className='home__tab px-1 py-2 border-2 border-[transparent] rounded-[1100px] text-base text-dark font-semibold'>
            Airtime 2 Cash
        </Link>
        <button disabled className='home__tab px-8 py-3 text-base text-gray-100 cursor-no-drop'>Pay Bills</button>
      </nav>
    </div>
  )
}

export const TabDetailControl =({currentTab}: HomeTabDetailsPropsType) => {
  switch (currentTab) {
    case ('/' || 'buy-airtime'):
      return <BuyAirtime />
    
    case 'buy-data':
      return <BuyData />
    
    case 'air-to-cash':
      return <Air2Cash />
    
    default:
      return <Fragment></Fragment>
  }
}


export default Home