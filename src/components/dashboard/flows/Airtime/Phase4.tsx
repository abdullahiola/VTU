import React, { Fragment, useContext } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../../../../context/AppContext'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import Thumbs from '../../../../assets/media/thumbs-up 1.svg'
import Home from '../../Home'
import Overlay from '../../../utilities/Overlay'

const Phase4 = () => {

  const {actionFn} = useContext(AppContext)
  const navigate = useNavigate()
  const {transactionState} = useContext(TransactionFlowContext)
  const close = () => {
    navigate('/')
  }

  return (
    <Fragment>
      <div className=' md:hidden'>
        <div className='min-w-full min-h-screen py-9 px-6 bg-[#FFF]'>
          <div className='flex items-center justify-end'>
            <IoCloseSharp onClick={close} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <div className='w-full'>
            <div className='pt-12 text-center'>
              <h6 className='pb-2'>Airtime Mobile Top Up</h6>
              <p className='text-gray-500 text-sm'>You have successfully credited airtime top of {transactionState.amount} to {transactionState.number}-{transactionState.name}</p>
            </div>
            <div className='w-full h-full flex items-center justify-center pt-12 pb-24'>
              <div className='w-[90px] aspect-square'><img src={Thumbs} alt="successful" /></div>
            </div>
            <div>
              <button className='w-full py-3 px-6 my-4 rounded-lg bg-green border-2 border-[transparent] text-white text-sm font-bold uppercase hover:bg-green-700 focus:bg-green-700'>Done</button>
              <span className=' text-gray-300 text-center w-full block'><Link to='/beneficiaries' className=' text-green text-sm underline hover:text-green-700'>Save Beneficiary?</Link></span>
            </div>
          </div>
        </div>
      </div>
      <div className=' hidden md:block'>
        <Home route='/' />
        <Overlay top={true} opacity={0.5}>
        <div className='w-[432px] h-fit py-9 px-6 bg-[#FFFFFF] rounded-xl mt-16'>
          <div className='flex items-center justify-end'>
            <IoCloseSharp onClick={close} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <div className='w-full'>
            <div className='pt-12 text-center'>
              <h6 className='pb-4'>Mobile Top Up  Successful</h6>
              <p className='text-gray-500 text-sm'>You have successfully credited airtime top of {transactionState.amount} to {transactionState.number}-{transactionState.name}</p>
            </div>
            <div className='w-full h-full flex items-center justify-center pt-6 pb-10'>
              <div className='w-[120px] aspect-square'><img src={Thumbs} alt="successful" /></div>
            </div>
            <div>
              <button onClick={close} className='w-full py-3 px-6 my-4 rounded-lg bg-green border-2 border-[transparent] text-white text-sm font-bold uppercase hover:bg-green-700 focus:bg-green-700'>Done</button>
              <span className=' text-gray-300 text-center w-full block'><Link to='/beneficiaries' className=' text-green text-sm underline hover:text-green-700'>Save Beneficiary?</Link></span>
            </div>
          </div>
        </div>
        </Overlay>
      </div>
    </Fragment>
  )
}

export default Phase4