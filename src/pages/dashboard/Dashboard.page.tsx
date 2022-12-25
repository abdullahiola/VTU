import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../context/AppContext'

const Home = ({}) => {

  const {menuState, setMenuState} = useContext(AppContext)

  return (
    <div>
      <h1 onClick={() => {setMenuState && setMenuState(!menuState)}} className='cursor-pointer'>Menu</h1>
      <h5><Link className=' text-brown' to='/login'>Login</Link></h5>
      <h5><Link className=' text-brown' to='/signup'>Signup</Link></h5>
    </div>
  )
}

export default Home