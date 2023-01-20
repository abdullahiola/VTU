
import {BsArrowRight} from 'react-icons/bs'
import {CardPropsType, TransactionCardPropsType} from '../../types/card.types'
import Icon1 from '../../assets/media/card-icon1.svg'

export const TransactionCard = ({bgColor, bgImg, provider, amount, name, number}: TransactionCardPropsType) => {
  
  return (
    <div style={{backgroundImage: `url(${bgImg})`, backgroundColor: bgColor}} className='w-full flex flex-col min-h-[182px] justify-between rounded-lg bg-no-repeat px-[18px] pt-[30.47px] pb-[26.13px] bg-right-bottom md:px-5 md:rounded-xl'>
      <div className='flex items-center justify-between'>
        <div className='flex flex-col '>
          <img src={Icon1} alt="" className='mb-[6.83px] w-[13.14px] h-[15.65px]' />
          <small className='text-dark-100'>{provider}</small>
        </div>
        <p className='font-semibold'>{amount}</p>
      </div>
      <div>
        <p className='text-dark-100 mb-[2px]'>{name}</p>
        <h6 className='text-dark font-semibold'>{number}</h6>
      </div>
    </div>
  )
}

const Card = ({bgColor, title, icon, detail}: CardPropsType) => {

  return (
    <div style={{backgroundColor: bgColor}} className="flex flex-col justify-between py-7 px-4 w-[148px] h-[135px] rounded-lg md:py-6 md:px-4 md:w-[288px] md:h-[182px] md:rounded-xl">
      <div className='w-6 h-6'>
        <img src={icon} className='w-full h-full' />
      </div>
      <div className='flex items-center justify-between'>
        <div>
          <h6 className=' text-base font-semibold md:mb-1'>{title}</h6>
          <p className='text-sm text-gray-500 hidden md:block'>{detail}</p>
        </div>
        <BsArrowRight className={`text-base cursor-pointer md:text-[18.67px]`} />
      </div>
    </div>
  )
}

export default Card
