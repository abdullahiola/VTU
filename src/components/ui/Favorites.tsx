import React from 'react'
import {FaPlus} from 'react-icons/fa'
import Avatar from '../../assets/media/avatar.svg'

export const Person =() => {

  const name = 'Rashida'

  return (
    <div className='flex flex-col items-center justify-between cursor-pointer'>
      <div className='mb-2 w-12 aspect-square'>
        <img src={Avatar} className='w-full h-full' />
      </div>
      <small>{name}</small>
    </div>
  )
}

const Favorites = () => {
  return (
    <section className='mb-16 md:hidden'>
      <p className ='pb-6'>Your Favourites</p>
      <div className='overflow-x-scroll'>
        <div className='w-max flex items-start justify-between gap-x-7'>
          <div className='w-[40px] p-3 bg-[#DCC3EC] aspect-square flex items-center justify-center rounded-full'>
            <FaPlus fontSize='100%' className='text-[#974CC7] cursor-pointer' />
          </div>
          <Person />
          <Person />
          <Person />
          <Person />
          <Person />
        </div>
      </div>
    </section>
  )
}

export default Favorites