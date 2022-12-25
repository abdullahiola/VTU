import React from 'react'
import {AiOutlinePlus} from 'react-icons/ai'

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

const Home = () => {
  return (
    <div className='px-6 md:px-12'>
      <FundDetail />
    </div>
  )
}

export default Home