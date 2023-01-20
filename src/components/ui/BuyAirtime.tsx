import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Icon1 from '../../assets/media/card-icon1.svg'
import Icon2 from '../../assets/media/card-icon2.svg'
import Icon3 from '../../assets/media/card-icon3.svg'
import { AppContext } from '../../context/AppContext'
import Card from './Card'
import Favorites from './Favorites'
import Transactions from './Transactions'

const BuyAirtime = () => {
  const msg = 'All networks in Nigeria'

  return (
    <div>
      <section className='overflow-x-scroll pt-4 pb-16 px-6 md:px-12 md:pb-20'>
        <div className='flex items-center w-max justify-between gap-x-4 px-1 md:w-full md:gap-x-8'>
          <Link to='/top-up/airtime/1'>
            <Card bgColor='#C9DDF7' icon={Icon1} title='Mtn' detail={msg} />
          </Link>
          <Link to='/top-up/airtime/1'>
            <Card bgColor='#F4E8D3' icon={Icon2} title='Glo' detail={msg} />
          </Link>
          <Link to='/top-up/airtime/'>
            <Card bgColor='#D7F4E4' icon={Icon3} title='Airtel' detail={msg} />
          </Link>
          <Link to='/top-up/airtime/1'>
            <Card bgColor='#EADBF4' icon={Icon1} title='9MOBILE' detail={msg} />
          </Link>
        </div>
      </section>
      <Favorites />
      <Transactions />
    </div>
  )
}

export default BuyAirtime