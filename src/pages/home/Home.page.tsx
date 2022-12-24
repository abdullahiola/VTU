import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <h2><Link className=' text-brown' to='/login'>Login</Link></h2>
      <h2><Link className=' text-brown' to='/signup'>Signup</Link></h2>
    </div>
  )
}

export default Home