import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from './Overlay'


type FullType = {
  full: boolean
  mini?: never
  screen?: never
}

type MiniType = {
  mini: boolean
  full?: never
  screen?: never
}

type ScreenType = {
  screen: boolean
  mini?: never
  full?: never
}

type LoadingPropsType = FullType | MiniType | ScreenType

const Loading = ({full, mini, screen, ...props}: LoadingPropsType) => {

  const elem = document.querySelector(".app") as HTMLDivElement

  const genSpinnerButtons = () => { 
    return (
      <>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0s] top-[13%] right-[12%]"} rounded-full bg-white absolute top-[13%] right-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.1s] top-[calc(50%-1rem)] right-0 -translate-y-0"} rounded-full bg-white absolute top-1/2 right-0 -translate-y-1/2`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.2s]"} rounded-full bg-white absolute bottom-[13%] right-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.3s] bottom-0 left-[calc(50%-1rem)] -translate-x-0"} rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.4s]"} rounded-full bg-white absolute bottom-[13%] left-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.5s] top-[calc(50%-1rem)] left-0  -translate-y-0"} rounded-full bg-white absolute top-1/2 left-0  -translate-y-1/2`}></li>       
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.6s]"} rounded-full bg-white absolute top-[13%] left-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${(full || screen) && "animate-[loading_ease_1s_infinite_0.7s] top-0 left-[calc(50%-1rem)] -translate-x-0"} rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2`}></li>
      </>
    )
   }

   if (full) {
     return ReactDOM.createPortal(
       <Overlay opacity={0.7}>
         <ul className=" bg-transparent w-[180px] h-[180px] relative rounded-[50%]">
          {genSpinnerButtons()}
         </ul>
       </Overlay>, 
       elem
     )
   }

   else if (mini) {
    return (
      <ul className={` animate-spin w-full h-full relative rounded-[50%]`}>
        {genSpinnerButtons()}
      </ul>
    )
   }
   
   else if (screen) {
    return (
      <Overlay opacity={0.25}>
         <ul className="bg-transparent animate-spin w-[180px] h-[180px] relative rounded-[50%]">
          <li className='w-8 h-8 rounded-full bg-white absolute top-[13%] right-[12%]'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute top-1/2 right-0 -translate-y-1/2'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute bottom-[13%] right-[12%]'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute bottom-[13%] left-[12%]'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute top-1/2 left-0  -translate-y-1/2'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute top-[13%] left-[12%]'></li>
          <li className='w-8 h-8 rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2'></li>
         </ul>
       </Overlay>
    )
   }
   

   else {
    return (
      <></>
    )
   }

}

export default Loading

