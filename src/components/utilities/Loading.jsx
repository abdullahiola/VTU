import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from './Overlay'

const Loading = ({full, mini, ...props}) => {

  const elem = document.querySelector(".app")

  const genSpinnerButtons = (w, h) => { 
    return (
      <>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0s] top-[13%] right-[12%]"} rounded-full bg-white absolute top-[13%] right-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.1s] top-[calc(50%-1rem)] right-0 -translate-y-0"} rounded-full bg-white absolute top-1/2 right-0 -translate-y-1/2`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.2s]"} rounded-full bg-white absolute bottom-[13%] right-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.3s] bottom-0 left-[calc(50%-1rem)] -translate-x-0"} rounded-full bg-white absolute bottom-0 left-1/2 -translate-x-1/2`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.4s]"} rounded-full bg-white absolute bottom-[13%] left-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.5s] top-[calc(50%-1rem)] left-0  -translate-y-0"} rounded-full bg-white absolute top-1/2 left-0  -translate-y-1/2`}></li>       
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.6s]"} rounded-full bg-white absolute top-[13%] left-[12%]`}></li>
        <li className={` ${mini ? "w-2" : "w-8"} ${mini ? "h-2" : "h-8"} ${full && "animate-[loading_ease_1s_infinite_0.7s] top-0 left-[calc(50%-1rem)] -translate-x-0"} rounded-full bg-white absolute top-0 left-1/2 -translate-x-1/2`}></li>
      </>
    )
   }

   if (full) {
     return ReactDOM.createPortal(
       <Overlay opacity={0.7}>
         <ul className=" bg-transparent w-[180px] h-[180px] relative rounded-[50%]">
          {genSpinnerButtons(32,32)}
         </ul>
       </Overlay>, 
       elem
     )
   }

   if (mini) {
    return (
      <ul className={` animate-spin w-full h-full relative rounded-[50%]`}>
        {genSpinnerButtons(8,8)}
      </ul>
    )
   }

}

export default Loading

