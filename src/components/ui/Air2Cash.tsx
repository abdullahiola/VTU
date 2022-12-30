import Icon1 from '../../assets/media/card-icon1.svg'
import Icon2 from '../../assets/media/card-icon2.svg'
import Icon3 from '../../assets/media/card-icon3.svg'
import Card from './Card'
import Favorites from './Favorites'
import Transactions from './Transactions'

const Air2Cash = () => {
  const airtelMsg = 'Convert AIRTEL airtime to cash'
  const mtnMsg = 'Convert MTN airtime to cash'
  const gloMsg = 'Convert GLO airtime to cash'
  const nMobileMsg = 'Convert 9MOBILE airtime to cash'

  return (
    <div>
      <section className='overflow-x-scroll pt-4 pb-16 px-6 md:px-12 md:pb-20'>
        <div className='flex items-center w-max justify-between gap-x-4 px-1 md:w-full md:gap-x-8'>
          <Card bgColor='#C9DDF7' icon={Icon1} title='Mtn' detail={mtnMsg} />
          <Card bgColor='#F4E8D3' icon={Icon2} title='Glo' detail={gloMsg} />
          <Card bgColor='#D7F4E4' icon={Icon3} title='Airtel' detail={airtelMsg} />
          <Card bgColor='#EADBF4' icon={Icon1} title='9MOBILE' detail={nMobileMsg} />
        </div>
      </section>
      <Favorites />
      <Transactions />
    </div>
  )
}

export default Air2Cash