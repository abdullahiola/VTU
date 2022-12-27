
import {BsArrowRight} from 'react-icons/bs'
import {CardPropsType} from '../../types/card.types'

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
