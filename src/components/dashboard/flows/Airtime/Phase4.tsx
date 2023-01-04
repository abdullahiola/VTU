import React, { useContext } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../../context/AppContext'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import Thumbs from '../../../../assets/media/thumbs-up 1.svg'

const Phase4 = () => {

  const {actionFn} = useContext(AppContext)
  const {transactionState} = useContext(TransactionFlowContext)
  const close = () => {
    actionFn('airtime', false)
  }

  return (
    <div className='min-w-full min-h-screen py-9 px-6 bg-flow md:px-9 md:rounded-xl md:min-w-[432px] md:min-h-full'>
      <div className='flex items-center justify-end'>
        <IoCloseSharp onClick={close} fontSize={24} className='text-gray-200 cursor-pointer' />
      </div>
      <div className='h-full w-full flex-col justify-between'>
        <div className='pt-12 text-center flex flex-col items-center justify-between md:pt-2'>
          <h6 className=' mb-2 font-bold md:hidden'>Airtime Mobile Top Up</h6>
          <h6 className='hidden mb-2 font-bold md:block'>Mobile Top Up  Successful</h6>
          <p className='text-gray-500 font-medium max-w-[30ch]'><small>You have successfuly credited airtime top of {transactionState.amount} to {transactionState.number}-{transactionState.name}</small></p>
        </div>
        <div className=''>
          <img src={Thumbs} alt="" className='scale-[0.65]' />
        </div>
        <div>
          <button onClick={close} className='submit__btn mb-8 md:mb-4'>Done</button>
          <Link onClick={close}
            to='/beneficiaries'
            className='w-full block text-center text-sm underline text-green hover:text-green-700'>Save Beneficiary?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Phase4