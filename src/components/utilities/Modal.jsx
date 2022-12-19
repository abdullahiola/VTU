import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import {SlClose} from 'react-icons/sl'
import Overlay from './Overlay'

const Modal = ({children, closeModal, ...props}) => {

  const modalRef = useRef(null)
  const handleClick = e => {
    if (!modalRef.current.contains(e.target)) {
      closeModal()
    } 
  }
  
  const elem = document.querySelector(".app")
  return ReactDOM.createPortal(
    <Overlay onClick={e => handleClick(e)} opacity={0.75}>
      <div ref={modalRef} className="toastModal animate-zoom w-4/5 max-w-[680px] bg-white text-dark-200 relative p-8 rounded-lg text-center text-2xl font-medium">
        <button onClick={closeModal} tabIndex={1} title='close' autoFocus={false} type='button' className=' w-fit h-fit absolute top-2 right-2 rounded-full flex items-center justify-center'><SlClose className=' block w-full h-full cursor-pointer text-3xl text-red-400 hover:text-red' /></button>
        {children}
      </div>
    </Overlay>, 
    elem
  )
}

export default Modal