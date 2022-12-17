import React from 'react'
import GooglePlay from '../../assets/media/image 128.png'

const DownloadMobile = () => {
  return (
    <div className="pb-3">
      <div className=' flex justify-center items-center'><img className=' w-[146px] cursor-pointer' src={GooglePlay}/></div>
      <p className=' text-sm text-center text-gray-300 pt-4 mx-auto max-w-[34ch]'>Download  the voom mobile app for a smoother user experience</p>
    </div>
  )
}

export default DownloadMobile