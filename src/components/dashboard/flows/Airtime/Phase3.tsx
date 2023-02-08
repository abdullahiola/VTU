import React, {Fragment, useContext, useEffect, useState} from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import { AppContext } from '../../../../context/AppContext'
import { TransactionCard } from '../../../ui/Card'
import bg from '../../../../assets/media/Group 7890.svg'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import { PhasePropsType } from '../../../../types/flow.type'
import { useNavigate } from 'react-router-dom'
import Home from '../../Home'
import Overlay from '../../../utilities/Overlay'

const Phase3 = ({}: PhasePropsType) => {

  const {actionFn} = useContext(AppContext)
  const navigate = useNavigate()
  const {transactionState, verified, setVerified} = useContext(TransactionFlowContext)
  const {name, number, provider, amount} = transactionState
  const [tokenValue, setTokenValue] = useState('')

  const isValid = () => {
    if (tokenValue.length>0) {
      return true
    }
    return false
  }

  const nextPage = () => {
    navigate('/top-up/airtime/4')
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTokenValue('')
    setVerified(true)
    nextPage()
  }

  useEffect(() => {
    setVerified(false)
  
  }, [])

  return (
    <Fragment>
      <div className=' md:hidden'>
        <div className='min-w-full min-h-screen py-9 px-6 bg-flow md:px-9'>
          <div className='flex items-center justify-between mb-2'>
            <h6 className='text-[20px] md:text-xl'>Review  Transaction</h6>
            <IoCloseSharp onClick={() => navigate('/')} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <p className='text-[12px] text-gray-500 mb-12 md:mb-[28px]'>Please review the details of the airtime top up and ensure they are correct before you proceed</p>
          <div className='w-full h-fit mb-8'>
            <TransactionCard name={name} number={number} provider={provider} amount={amount} bgColor='#C9DDF7' bgImg={bg} />
          </div>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <label htmlFor="token" className='text-gray-500 mb-1'>Authorize transaction</label>
              <input
                value={tokenValue}
                onChange={(e) => setTokenValue(e.target.value)}
                className='p-4 text-dark-100 block w-full rounded-lg border-2 border-gray-200 bg-flow placeholder:text-gray-100'  
                type="text" name="token" id="tokenId" placeholder='Input your secure pin' />
            </div>
            <button type="submit" disabled={!isValid()} className='flow__btn'>BUY {provider} {amount}</button>
          </form>
        </div>
      </div>
      <div className=' hidden md:block'>
        <Home route='/' />
        <Overlay top={true} opacity={0.5}>
        <div className='w-[432px] h-fit py-9 px-6 bg-flow rounded-xl mt-8'>
          <div className='flex items-center justify-between mb-2'>
            <h6 className='text-[20px] md:text-xl'>Review  Transaction</h6>
            <IoCloseSharp onClick={() => navigate('/')} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <p className='text-[12px] text-gray-500 mb-12 md:mb-[28px]'>Please review the details of the airtime top up and ensure they are correct before you proceed</p>
          <div className='w-full h-fit mb-8'>
            <TransactionCard name={name} number={number} provider={provider} amount={amount} bgColor='#C9DDF7' bgImg={bg} />
          </div>
          <form onSubmit={e => onSubmit(e)}>
            <div>
              <label htmlFor="token" className='text-gray-500 mb-1'>Authorize transaction</label>
              <input
                value={tokenValue}
                onChange={(e) => setTokenValue(e.target.value)}
                className='p-4 text-dark-100 block w-full rounded-lg border-2 border-gray-200 bg-flow placeholder:text-gray-100'  
                type="text" name="token" id="tokenId" placeholder='Input your secure pin' />
            </div>
            <button type="submit" disabled={!isValid()} className='flow__btn'>BUY {provider} {amount}</button>
          </form>
        </div>
        </Overlay>
      </div>
    </Fragment>
  )
}

export default Phase3