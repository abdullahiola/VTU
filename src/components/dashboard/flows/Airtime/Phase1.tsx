import React, {useState, Fragment, useContext, useRef, useEffect} from 'react'
import {IoCloseSharp} from 'react-icons/io5'
import {BiChevronDown} from 'react-icons/bi'
import MTN from '../../../../assets/media/MTN.svg'
import { AppContext } from '../../../../context/AppContext'
import { PhasePropsType } from '../../../../types/flow.type'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import { Link, useNavigate } from 'react-router-dom'
import Overlay from '../../../utilities/Overlay'
import Home from '../../Home'


const Phase1 = ({}: PhasePropsType) => {

  const {transactionState, setTransactionState, verified, setVerified} = useContext(TransactionFlowContext)

  const {actionFn} = useContext(AppContext)
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

  const [sectionState, setSectionState] = useState('airtime')
 
  const price = [{price: 100}, {price: 200}, {price: 400}, {price: 500}, {price: 1000}]

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
    navigate('/top-up/airtime/2')
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
  
 
  return (
    <Fragment>
      <div className=' md:hidden '>
        <div className='min-w-full min-h-screen py-9 px-6 bg-flow'>
          <div className='flex items-center justify-between mb-2'>
            <h6>Mobile Top Up</h6>
            <IoCloseSharp onClick={() => navigate('/')} fontSize={24} className='text-gray-200 cursor-pointer' />
          </div>
          <nav className='mb-12'>
            <button style={{borderColor: sectionState === 'airtime' ? '#00C297' : 'transparent'}} onClick={() => setSectionState('airtime')} className='text-gray-500 text-base border-b-[3px] border-[transparent] py-2 mr-6'><Link to='/top-up/airtime/1'>Airtime</Link></button>
            <button style={{borderColor: sectionState === 'data' ? '#00C297' : 'transparent'}} onClick={() => setSectionState('data')} className='text-gray-500 text-base border-b-[3px] border-[transparent] py-2'><Link to='/top-up/data/1'>Data</Link></button>
          </nav>
          {
            sectionState === 'airtime' ? 
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
                  <label htmlFor='amount' className='text-gray-500 mb-1'>Amount</label>
                  <div className='w-full py-3 px-3 border-2 border-gray-200 relative rounded-lg'>
                    <div className='flex items-center justify-end'>
                      <input type="text" name="amount" id="amount" value={amountValue}
                        onChange={(e) => {
                          e.target.value.includes('₦') ? setAmountValue(e.target.value) : (setAmountValue(`₦${e.target.value}`))
                        }}
                        className='h-full w-full bg-flow text-gray-400 absolute top-0 left-0 bottom-0 px-3 py-3 rounded-lg'
                      />
                      <BiChevronDown onClick={() => setAmountDropdownState(!amountDropdownState)} fontSize={24} className='cursor-pointer text-dark bg-flow z-10' />
                    </div>
                  </div>
                  {
                    amountDropdownState ? 
                      <ul className='absolute bottom-0 translate-y-full z-30 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                        {
                          price.map(item => {
                            return (
                              <Fragment key={item.price}>
                                <li onClick={() => {
                                  setAmountValue(`₦${item.price.toString()}`)
                                  setAmountDropdownState(false)
                                }} className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'>₦{item.price}</li>
                              </Fragment>
                            )
                          })
                        }
                      </ul> : null
                  }
                </div>
                <div className='flex items-center justify-between'>
                  {
                    price.map(item => {
                      return (
                        <Fragment key={item.price}>
                          <button style={{
                            background: amountValue === `₦${item.price.toString()}` ? '#CCF3EA' : 'transparent' 
                          }} onClick={() => setAmountValue(`₦${item.price.toString()}`)} className='text-gray-500 rounded py-1 px-2 text-sm'>₦{item.price}</button>
                        </Fragment>
                      )
                    })
                  }
                </div>
                <button onClick={onSubmit} disabled={!(amountValue.length>0 && amountValue!=='₦')} className='flow__btn'>Next</button>
              </section> : 
              <h1>Data</h1>
          }
        </div>
      </div>
      <div className='hidden md:block'>
        <Home route='/'/>
        <Overlay top={true} opacity={0.5}>
          <div className='w-[432px] h-fit rounded-xl bg-flow mt-8'>
            <div className='w-full h-full py-9 px-6'>
              <div className='flex items-center justify-between mb-2'>
                <h6>Mobile Top Up</h6>
                <IoCloseSharp onClick={() => navigate('/')} fontSize={24} className='text-gray-200 cursor-pointer' />
              </div>
              <nav className='mb-12'>
                <Link to='/top-up/airtime/1' style={{borderColor: sectionState === 'airtime' ? '#00C297' : 'transparent'}} onClick={() => setSectionState('airtime')} className='text-gray-500 text-base border-b-[3px] border-[transparent] py-2 mr-6'>Airtime</Link>
                <Link to='/top-up/data/1' style={{borderColor: sectionState === 'data' ? '#00C297' : 'transparent'}} onClick={() => setSectionState('data')} className='text-gray-500 text-base border-b-[3px] border-[transparent] py-2'>Data</Link>
              </nav>
              {
                sectionState === 'airtime' ? 
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
                      <label htmlFor='amount' className='text-gray-500 mb-1'>Amount</label>
                      <div className='w-full py-3 px-3 border-2 border-gray-200 relative rounded-lg'>
                        <div className='flex items-center justify-end'>
                          <input type="text" name="amount" id="amount" value={amountValue}
                            onChange={(e) => {
                              e.target.value.includes('₦') ? setAmountValue(e.target.value) : (setAmountValue(`₦${e.target.value}`))
                            }}
                            className='h-full w-full bg-flow text-gray-400 absolute top-0 left-0 bottom-0 px-3 py-3 rounded-lg'
                          />
                          <BiChevronDown onClick={() => setAmountDropdownState(!amountDropdownState)} fontSize={24} className='cursor-pointer text-dark bg-flow z-10' />
                        </div>
                      </div>
                      {
                        amountDropdownState ? 
                          <ul className='absolute bottom-0 translate-y-full z-30 w-full left-0 bg-[#FFFFFF] border border-gray-100 rounded-b-lg'>
                            {
                              price.map(item => {
                                return (
                                  <Fragment key={item.price}>
                                    <li onClick={() => {
                                      setAmountValue(`₦${item.price.toString()}`)
                                      setAmountDropdownState(false)
                                    }} className='cursor-pointer px-4 py-2 border-b-2 border-gray-100 text-gray-500 uppercase font-normal hover:bg-[rgba(228,228,228,1)] hover:font-semibold'>₦{item.price}</li>
                                  </Fragment>
                                )
                              })
                            }
                          </ul> : null
                      }
                    </div>
                    <div className='flex items-center justify-between'>
                      {
                        price.map(item => {
                          return (
                            <Fragment key={item.price}>
                              <button style={{
                                background: amountValue === `₦${item.price.toString()}` ? '#CCF3EA' : 'transparent' 
                              }} onClick={() => setAmountValue(`₦${item.price.toString()}`)} className='text-gray-500 rounded py-1 px-2 text-sm'>₦{item.price}</button>
                            </Fragment>
                          )
                        })
                      }
                    </div>
                    <button onClick={onSubmit} disabled={!(amountValue.length>0 && amountValue!=='₦')} className='flow__btn'>Next</button>
                  </section> : 
                  <h1>Data</h1>
              }
            </div>
          </div>
        </Overlay>
      </div>
    </Fragment>
  )
}

export default Phase1