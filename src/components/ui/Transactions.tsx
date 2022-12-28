import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import MTN from '../../assets/media/MTN.svg'
import { Link } from 'react-router-dom'

const Transactions = () => {

  const transactionDate = new Date()
  const transactionCategory = "Airtime Purchase"
  const transactionDescription = "Bought MTN airtime 1000"
  const transactionRefrence = "LGBTQ703"
  const transactionRecepient = "08115716657"
  const transactionAmount = "5,000.00"

  const mockData = [
    {
      date: transactionDate.toString(),
      category: transactionCategory,
      description: transactionDescription,
      refrence: transactionRefrence,
      amount: transactionAmount,
      status: 'pending',
      recepient: transactionRecepient
    },
    {
      date: transactionDate.toString(),
      category: transactionCategory,
      description: transactionDescription,
      refrence: transactionRefrence,
      amount: transactionAmount,
      status: 'failed',
      recepient: transactionRecepient
    },
    {
      date: transactionDate.toString(),
      category: transactionCategory,
      description: transactionDescription,
      refrence: transactionRefrence,
      amount: transactionAmount,
      status: 'success',
      recepient: transactionRecepient
    },
  ]

  const formattedDate = mockData.map(data => {
    return data.date.split(" ")
  })

  
  const month = formattedDate[0][1]
  const dayCount = formattedDate[0][2]
  const year = formattedDate[0][3]
  const time = formattedDate[0][4]


  return (
    <div className='px-6 md:px-12 pb-[52px] lg:pb-16'>
      <div className='rounded-xl bg-[#ffffff] pt-5 pb-[52px] lg:pt-[46px] lg:pb-8'>
        <div className='flex items-center justify-between w-full px-[28px] pb-8 lg:px-[44px] lg:pb-12'>
          <p className=''>Recent transactions</p>
          <div className='text-purple-400'>
            <Link to='/transactions' className='w-full flex items-center justify-between'>
              <small className='hidden lg:block'>View all</small>
              <BsArrowRight fontSize='18px' className='ml-4 font-extrabold text-gray-500 lg:text-[inherit]' />
            </Link> 
          </div>
        </div>
        <table className='hidden w-full lg:table'>
          <thead className=''>
            <tr className='px-8 border-b-[3px] border-[#FAFAFA]'>
              <th className='pb-[16px] pl-[44px] uppercase text-left w-max text-gray-200'>Date</th>
              <th className='pb-[16px] uppercase text-left w-max text-gray-200'>CATEGORY</th>
              <th className='pb-[16px] uppercase text-left w-max text-gray-200'>Description</th>
              <th className='pb-[16px] uppercase text-left w-max text-gray-200'>REFERENCE ID</th>
              <th className='pb-[16px] uppercase text-left w-max text-gray-200'>Status</th>
              <th className='pb-[16px] pr-[44px] uppercase text-right w-max text-gray-200'>Amount</th>
            </tr>
          </thead>
          <tbody className=''>
            {
              mockData.map((data, index) => {
                return (
                  <tr key={index} className='mb-12'>
                    <td className='py-[20px] pl-[44px]'>
                      <span className='block text-gray-300 text-base'>{dayCount} {month}, {year}</span>
                      <span className='block text-gray-300 text-base'>{time}</span>
                    </td>
                    <td className='py-[20px] flex items-center'><img src={MTN} alt="#" className='w-6 aspect-square mr-1' /><span className='text-gray-500'>{data.category}</span></td>
                    <td className='py-[20px]'>
                      <span className=' block text-gray-500'>{data.description} -</span>
                      <span className=' block text-gray-200'>{data.recepient}</span>
                    </td>
                    <td className='py-[20px]'><span className='text-gray-500'>{data.refrence}</span></td>
                    <td className='py-[20px]'><span className={`${(data.status.toLowerCase() === 'pending' && "text-[#F2C94C]") || (data.status.toLowerCase() === 'success' && "text-green") || (data.status.toLowerCase() === 'failed' && "text-red")} uppercase underline`}>{data.status}</span></td>
                    <td className='py-[20px] pr-[44px] text-right'><span className='text-dark'>{data.amount}</span></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <ul className='flex flex-col gap-y-12 lg:hidden'>
          {
            mockData.map((data, index) => {
              return (
                <li key={index} className='flex items-center justify-between px-[25px]'>
                  <div className='flex items-center justify-start'>
                    <img src={MTN} alt='' className='w-[20px] aspect-square mr-5' />
                    <div className='flex flex-col items-start justify-between gap-y-2'>
                      <span className='block text-gray-300 text-base'>{dayCount} {month}, {year} {time}</span>
                      <p className='text-dark-100 font-semibold capitalize'>{data.category}</p>
                      <small className={`${(data.status.toLowerCase() === 'pending' && "text-[#F2C94C]") || (data.status.toLowerCase() === 'success' && "text-green") || (data.status.toLowerCase() === 'failed' && "text-red")} uppercase underline`}>{data.status}</small>
                    </div>
                  </div>
                  <div className='text-dark-100 font-bold text-base'>{data.amount}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Transactions