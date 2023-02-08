import React, { useState, useContext, useEffect, Fragment } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { userData } from '../../../../assets/data/appdata'
import { AppContext } from '../../../../context/AppContext'
import { TransactionFlowContext } from '../../../../context/TransactionFlowContext'
import { PhasePropsType } from '../../../../types/flow.type'
import Overlay from '../../../utilities/Overlay'
import Home from '../../Home'


const Phase2 = ({}: PhasePropsType) => {

  const [value, setValue] = useState('')
  const navigate = useNavigate()
  const [sectionState, setSectionState] = useState('favorites')
  const {actionFn} = useContext(AppContext)
  const {transactionState, setTransactionState, verified, setVerified} = useContext(TransactionFlowContext)

  const nextPage = () => {
    navigate('/top-up/data/3')
  }
  
  const mockUsers = [
    "Melissa Chukwueze",
    "Collins Chinedu",
    "Danfo Danford",
    "Dino Onyemere",
    "Seun Oladele",
    "Michael Jackson",
    "Kenny black",
    "Sikiru Abdullahi",
  ]

  const randomIndex = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const randomUser = randomIndex(0, mockUsers.length)
    setTransactionState({...transactionState, number: value, name: mockUsers[randomUser]})
    setVerified(true)
    nextPage()
  }

  const prevPage = () => {
    navigate('/top-up/data/1')
  }  

  function isValid(str: string) {
    return /^\d+$/.test(str);
  }

  useEffect(() => {
    setVerified(false)
  
  }, [])

  return (
    <Fragment>
      <div className=' md:hidden'>
        <div className='min-w-full min-h-screen py-9 px-6 bg-flow'>
          <div className='flex items-center justify-start mb-5'>
            <BiArrowBack onClick={prevPage} fontSize={22} className='text-[#201D1D] mr-4 cursor-pointer' />
            <h6 className='text-[20px] text-gray-500 md:text-xl'>Input  Beneficiary Details</h6>
          </div>
          <div>
            <form onSubmit={e => onSubmit(e)}>
              <label htmlFor="phone" className='text-gray-500 mb-1'>Beneficiary Phone number</label>
              <input 
                className='p-4 text-dark-100 block w-full rounded-lg border-2 border-gray-200 bg-flow placeholder:text-gray-100' 
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id='phone' name='phone' type='tel' placeholder='Input Phone Number'
              />
              <button type='submit' disabled={!(value.length===11 && isValid(value))} className='flow__btn'>PROCEED</button>
            </form>
          </div>
          <nav className='flex items-center justify-start pt-6'>
            <button style={{borderColor: sectionState === 'favorites' ? '#00C297' : 'transparent'}} onClick={() => setSectionState("favorites")} className='text-sm text-gray-300 py-2 border-b-[3px] border-[transparent] mr-4'>Favourites</button>
            <button style={{borderColor: sectionState === 'recent' ? '#00C297' : 'transparent'}} onClick={() => setSectionState("recent")} className='text-sm text-gray-300 py-2 border-b-[3px] border-[transparent]'>Recent</button>
            <Link to='/favorites' className='text-green text-sm underline ml-auto'>View All</Link>
          </nav>
          {
            sectionState === 'favorites' && 
            <ul className='flex flex-col justify-start gap-y-5 py-8'>
              {
                userData.favorites.map(item => {
                  return(
                    <li
                      onClick={() => {
                        setTransactionState({...transactionState, number: item.number, name: item.name})
                        nextPage()
                      }}
                      className='flex items-center justify-between cursor-pointer' key={item.name}>
                      <span className='flex items-center'>
                        <span style={{backgroundColor: item.color}} className='rounded-full mr-3 flex items-center justify-center w-6 aspect-square text-white font-semibold'>{item.name[0]}</span>
                        <span className='text-dark-100 font-semibold capitalize'>{item.name}</span></span>
                      <span className='text-gray-500'>{item.number}</span>
                    </li>
                  )
                })
              }
            </ul>
          }
          {
            sectionState ==='recent' &&
            <h1>Recent</h1>
          }
        </div>
      </div>
      <div className='hidden md:block'>
        <Home route='buy-data' />
        <Overlay top={true} opacity={0.5}>
          <div className='w-[432px] h-fit py-9 pb-0 px-6 bg-flow rounded-xl mt-8'>
            <div className='flex items-center justify-start mb-5'>
              <BiArrowBack onClick={prevPage} fontSize={22} className='text-[#201D1D] mr-4 cursor-pointer' />
              <h6 className='text-[20px] text-gray-500 md:text-xl'>Input  Beneficiary Details</h6>
            </div>
            <div>
              <form onSubmit={e => onSubmit(e)}>
                <label htmlFor="phone" className='text-gray-500 mb-1'>Beneficiary Phone number</label>
                <input 
                  className='p-4 text-dark-100 block w-full rounded-lg border-2 border-gray-200 bg-flow placeholder:text-gray-100' 
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  id='phone' name='phone' type='tel' placeholder='Input Phone Number'
                />
                <button type='submit' disabled={!(value.length===11 && isValid(value))} className='flow__btn'>PROCEED</button>
              </form>
            </div>
            <nav className='flex items-center justify-start pt-6'>
              <button style={{borderColor: sectionState === 'favorites' ? '#00C297' : 'transparent'}} onClick={() => setSectionState("favorites")} className='text-sm text-gray-300 py-2 border-b-[3px] border-[transparent] mr-4'>Favourites</button>
              <button style={{borderColor: sectionState === 'recent' ? '#00C297' : 'transparent'}} onClick={() => setSectionState("recent")} className='text-sm text-gray-300 py-2 border-b-[3px] border-[transparent]'>Recent</button>
              <Link to='/favorites' className='text-green text-sm underline ml-auto'>View All</Link>
            </nav>
            {
              sectionState === 'favorites' && 
              <ul className='flex flex-col justify-start gap-y-5 py-8'>
                {
                  userData.favorites.map(item => {
                    return(
                      <li
                        onClick={() => {
                          setTransactionState({...transactionState, number: item.number, name: item.name})
                          nextPage()
                        }}
                        className='flex items-center justify-between cursor-pointer' key={item.name}>
                        <span className='flex items-center'>
                          <span style={{backgroundColor: item.color}} className='rounded-full mr-3 flex items-center justify-center w-6 aspect-square text-white font-semibold'>{item.name[0]}</span>
                          <span className='text-dark-100 font-semibold capitalize'>{item.name}</span></span>
                        <span className='text-gray-500'>{item.number}</span>
                      </li>
                    )
                  })
                }
              </ul>
            }
            {
              sectionState ==='recent' &&
              <h1>Recent</h1>
            }
          </div>
        </Overlay>
      </div>
    </Fragment>
  )
}

export default Phase2