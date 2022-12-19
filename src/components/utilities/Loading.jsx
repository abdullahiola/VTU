import React from 'react'
import ReactDOM from 'react-dom'
import Overlay from './Overlay'

const Loading = () => {

  const elem = document.querySelector(".app")

  return ReactDOM.createPortal(
    <Overlay opacity={0.7}>
      <ul className=" bg-transparent w-[180px] h-[180px] relative rounded-[50%]">
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0s] rounded-full bg-white absolute top-[13%] right-[12%]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.1s] rounded-full bg-white absolute right-0 top-[calc(50%-1rem)]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.2s] rounded-full bg-white absolute bottom-[13%] right-[12%]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.3s] rounded-full bg-white absolute bottom-0 left-[calc(50%-1rem)]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.4s] rounded-full bg-white absolute bottom-[13%] left-[12%]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.5s] rounded-full bg-white absolute left-0 top-[calc(50%-1rem)]"></li>       
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.6s] rounded-full bg-white absolute top-[13%] left-[12%]"></li>
        <li className=" w-8 h-8 animate-[loading_ease_1s_infinite_0.7s] rounded-full bg-white absolute top-0 left-[calc(50%-1rem)]"></li>
      </ul>
    </Overlay>, 
    elem
  )
}

export default Loading

