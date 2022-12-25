import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className=' text-center py-4 px-8'>
      <h1>Page Not Found!</h1>
      <h3><Link className='text-purple-300 hover:text-purple-400' to='/'>Go Home</Link></h3>
    </div>
  )
}

export default Error