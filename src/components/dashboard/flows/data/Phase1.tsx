import React, { useState, useEffect, useContext, useRef, Fragment } from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import {BiChevronDown, BiChevronRight, BiChevronLeft} from 'react-icons/bi'
import { PhasePropsType } from '../../../../types/flow.type'
import MTN from '../../../../assets/media/MTN.svg'
import { Link, useNavigate, NavLink } from 'react-router-dom'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import Overlay from '../../../utilities/Overlay'
import Home from '../../Home'

const Phase1 = ({}: PhasePropsType) => {
  
  const {transactionState, setTransactionState, setVerified} = useContext(TransactionFlowContext)
  
  const navigate = useNavigate()

  const defaultObj = {
    '9Mobile': false,
    'Airtel': false,
    'Glo': false,
    'Mtn': false,
  }

  const [networkProviderState, setNetworkProviderState] = useState({
    '9Mobile': false,
    'Airtel': false,
    'Glo': false,
    'Mtn': true,
  })
  
  const plan = [
    {price: '1GB MONTHLY----- ₦500'}, 
    {price: '3GB MONTHLY----- ₦1200'}, 
    {price: '5GB MONTHLY----- ₦2000'}, 
    {price: '7GB MONTHLY----- ₦5000'}, 
    {price: '10GB MONTHLY----- ₦9000'}
  ]

  const [providerDropdownState, setProviderDropdownState] = useState(false)
  const [amountDropdownState, setAmountDropdownState] = useState(false)
  const [amountValue, setAmountValue] = useState('')

  const providerObj = {
    '9Mobile': networkProviderState['9Mobile'],
    'Airtel': networkProviderState['Airtel'],
    'Glo': networkProviderState['Glo'],
    'Mtn': networkProviderState['Mtn'],
  }
  
  const nextPage = () => {
    navigate('/top-up/data/2')
  }  

  const objVals = Object.entries(providerObj)
 
  const selectedProvider = objVals.filter((item: [string, boolean]) => { 
    return item[1] === true
  })[0][0]

  const otherProvider = objVals.filter((item: [string, boolean]) => { 
    return item[1] === false
  })

  const onSubmit = () => {
    setTransactionState({...transactionState, provider: selectedProvider, amount: amountValue})
    setVerified(true)
    nextPage()
  }

  useEffect(() => {
    setVerified(false)
  
  }, [])

  const [scrollState, setScrollState] = useState({count: 0, left: false, right: true})
  const divRef = useRef({} as HTMLDivElement)

  const scrollDiv = (val: number) => {
    divRef.current.scrollBy(val, 0)
    if (scrollState.count >= 507) {
      setScrollState({count: scrollState.count + val, left: true, right: false})
    } 
    else if (scrollState.count >= 338 && val < 0) {
      setScrollState({count: scrollState.count + val, left: true, right: false})
    } else {
      setScrollState({count: scrollState.count + val, left: false, right: true})
    }
  }

  return (
    <Fragment>
      <div className='md:hidden'>
        <div className='min-w-full min-h-screen py-9 px-6 bg-flow'>
          <div className='flex items-center justify-between mb-2'>
            <h6>Mobile Top Up</h6>
            <IoCloseSharp onClick={() => navigate('/buy-data')} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <nav className='mb-12 flex'>
            <NavLink className='transaction--type__btn block text-gray-500 text-base border-b-[3px] border-[transparent] py-2 mr-6' to='/top-up/airtime/1'>Airtime</NavLink>
            <NavLink className='transaction--type__btn block text-gray-500 text-base border-b-[3px] border-[transparent] py-2' to='/top-up/data/1'>Data</NavLink>
          </nav>
          <div className='mb-8'>
            <label className='text-gray-500 mb-1'>Choose Network Provider</label>
            <div className='w-full py-3 px-3 border-2 border-gray-200 rounded-lg relative'>
              <div onClick={() => setProviderDropdownState(!providerDropdownState)} className='flex cursor-pointer items-center justify-between'>
                <div className='flex items-center justify-start'>
                  <img className='mr-2 w-[20px] aspect-square' src={MTN} alt="logo" />
                  <small className='uppercase font-semibold text-gray-500'>{selectedProvider || 'MTN'}</small>
                </div>
                <BiChevronDown fontSize={24} className='cursor-pointer text-dark' />
              </div>
              {
                providerDropdownState ? 
                  <ul className='absolute bottom-0 translate-y-full z-20 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                    {
                      otherProvider.map((item: [string, boolean]) => {
                        return (
                          <li 
                            className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'
                            onClick={() => {
                              setNetworkProviderState(
                                {
                                  ...defaultObj, [item[0]]: true
                                }
                              )
                              setProviderDropdownState(false)
                            }}
                            key={item[0]}>{item[0]}</li>
                        )
                      })
                    }
                  </ul> : null
              }
            </div>
          </div>
          <div className='mb-2 relative'>
            <label htmlFor='amount' className='text-gray-500 mb-1'>Data Plan</label>
            <div className='w-full py-3 px-3 border-2 border-gray-200 relative rounded-lg'>
              <div className='flex items-center justify-end'>
                <input readOnly type="text" name="amount" id="amount" value={amountValue}
                  
                  className='h-full w-full bg-flow text-gray-400 absolute top-0 left-0 bottom-0 px-3 py-3 rounded-lg'
                />
                <BiChevronDown onClick={() => setAmountDropdownState(!amountDropdownState)} fontSize={24} className='cursor-pointer text-dark bg-flow z-10' />
              </div>
            </div>
            {
              amountDropdownState ? 
                <ul className='absolute bottom-0 translate-y-full z-30 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                  {
                    plan.map(item => {
                      return (
                        <Fragment key={item.price}>
                          <li onClick={() => {
                            setAmountValue(`${item.price.toString()}`)
                            setAmountDropdownState(false)
                          }} className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'>{item.price}</li>
                        </Fragment>
                      )
                    })
                  }
                </ul> : null
            }
          </div>
          <div className='flex items-center justify-between bg-[#F4FAF6] relative'>
            <div className='overflow-scroll flex items-start justify-between gap-x-2'>
              {
                plan.map(item => {
                  return (
                    <div key={item.price}>
                      <button style={{
                        background: amountValue === `${item.price.toString()}` ? '#CCF3EA' : 'transparent' 
                      }} onClick={() => setAmountValue(`${item.price.toString()}`)} className='text-gray-500 rounded py-2 px-4 text-sm w-max'>{item.price}</button>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <button onClick={onSubmit} disabled={!(amountValue.length>0)} className='flow__btn'>Next</button>
        </div>
      </div>
      <div className='hidden md:block'>
        <Home route='buy-data'/>
        <Overlay top={true} opacity={0.5}>
          <div className='w-[432px] h-fit rounded-xl bg-flow mt-8'>
            <div className='w-full h-full py-9 px-6'>
              <div className='flex items-center justify-between mb-2'>
                <h6>Mobile Top Up</h6>
                <IoCloseSharp onClick={() => navigate('/buy-data')} fontSize={24} className='text-gray-200 cursor-pointer' />
              </div>
              <nav className='mb-12 flex'>
                <NavLink className='transaction--type__btn block text-gray-500 text-base border-b-[3px] border-[transparent] py-2 mr-6' to='/top-up/airtime/1'>Airtime</NavLink>
                <NavLink className='transaction--type__btn block text-gray-500 text-base border-b-[3px] border-[transparent] py-2' to='/top-up/data/1'>Data</NavLink>
              </nav>

              <section>
                <div className='mb-8'>
                  <label className='text-gray-500 mb-1'>Choose Network Provider</label>
                  <div className='w-full py-3 px-3 border-2 border-gray-200 rounded-lg relative'>
                    <div onClick={() => setProviderDropdownState(!providerDropdownState)} className='flex cursor-pointer items-center justify-between'>
                      <div className='flex items-center justify-start'>
                        <img className='mr-2 w-[20px] aspect-square' src={MTN} alt="logo" />
                        <small className='uppercase font-semibold text-gray-500'>{selectedProvider || 'MTN'}</small>
                      </div>
                      <BiChevronDown fontSize={24} className='cursor-pointer text-dark' />
                    </div>
                    {
                      providerDropdownState ? 
                        <ul className='absolute bottom-0 translate-y-full z-20 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                          {
                            otherProvider.map((item: [string, boolean]) => {
                              return (
                                <li 
                                  className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'
                                  onClick={() => {
                                    setNetworkProviderState(
                                      {
                                        ...defaultObj, [item[0]]: true
                                      }
                                    )
                                    setProviderDropdownState(false)
                                  }}
                                  key={item[0]}>{item[0]}</li>
                              )
                            })
                          }
                        </ul> : null
                    }
                  </div>
                </div>
                <div className='mb-2 relative'>
                  <label htmlFor='amount' className='text-gray-500 mb-1'>Data Plan</label>
                  <div className='w-full py-3 px-3 border-2 border-gray-200 relative rounded-lg'>
                    <div className='flex items-center justify-end'>
                      <input readOnly type="text" name="amount" id="amount" value={amountValue}
                        className='h-full w-full bg-flow text-gray-400 absolute top-0 left-0 bottom-0 px-3 py-3 rounded-lg'
                      />
                      <BiChevronDown onClick={() => setAmountDropdownState(!amountDropdownState)} fontSize={24} className='cursor-pointer text-dark bg-flow z-10' />
                    </div>
                  </div>
                  {
                    amountDropdownState ? 
                      <ul className='absolute bottom-0 translate-y-full z-30 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                        {
                          plan.map(item => {
                            return (
                              <Fragment key={item.price}>
                                <li onClick={() => {
                                  setAmountValue(`${item.price.toString()}`)
                                  setAmountDropdownState(false)
                                }} className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'>{item.price}</li>
                              </Fragment>
                            )
                          })
                        }
                      </ul> : null
                  }
                </div>
                <div className='flex items-center justify-between bg-[#F4FAF6] relative'>
                  {
                    scrollState.left && 
                    <div onClick={() => scrollDiv(-169)} className='absolute left-0 top-0 bottom-0 flex items-center justify-center w-8 bg-[#F2FFF6] cursor-pointer'><BiChevronLeft fontSize={20} className='text-[#37C779]' /></div>
                  }
                  {
                    scrollState.right && 
                    <div onClick={() => scrollDiv(169)} className='absolute right-0 top-0 bottom-0 flex items-center justify-center w-8 bg-[#F2FFF6] cursor-pointer'><BiChevronRight fontSize={20} className='text-[#37C779]' /></div>
                  }
                  <div ref={divRef} className='overflow-scroll flex items-start justify-between gap-x-2 pr-8'>
                    {
                      plan.map(item => {
                        return (
                          <Fragment key={item.price}>
                            <button style={{
                              background: amountValue === `${item.price.toString()}` ? '#CCF3EA' : 'transparent' 
                            }} onClick={() => setAmountValue(`${item.price.toString()}`)} className='text-gray-500 rounded py-2 px-4 text-sm min-w-max'>{item.price}</button>
                          </Fragment>
                        )
                      })
                    }
                  </div>
                </div>
                <button onClick={onSubmit} disabled={!(amountValue.length>0)} className='flow__btn'>Next</button>
              </section>
            </div>
          </div>
        </Overlay>
      </div>
    </Fragment>
  )
}

export default Phase1