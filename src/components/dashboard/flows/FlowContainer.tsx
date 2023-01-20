import React, { lazy, Suspense, Fragment, useContext } from 'react'
import Overlay from '../../utilities/Overlay'
import { Loader } from '../../../App';
import { TransactionFlowContext } from '../../../context/TransactionFlowContext';
import { ActionPropsType, BaseFlowPropsType } from '../../../types/flow.type'

const AirtimeFlow = lazy(() => import('./Airtime/AirtimeFlow'))
export const FlowActionControl = ({Component}: ActionPropsType) => {

  return (
    <Suspense fallback={
      <Overlay opacity={0}>
        <div className=' w-full h-full md:w-[432px] md:aspect-square flex items-center justify-center'>
          <Loader />
        </div>
      </Overlay>
    }>
      {Component}
    </Suspense>

  )
}

// const Container = ({children, width, page, numOfPanels}: BaseFlowPropsType) => {

//   const {verified} = useContext(TransactionFlowContext)

//   return (
//     <>
//       <div
//         style={{width: `100vw`}} className='overflow-x-hidden md:hidden'>
//         <div 
//           style={{
//             width: `calc($100vw*${numOfPanels})`,
//             transform: verified ? `translateX(${page}vw)` : ''
//           }} className='flex transition-all'
//         >
//           {children}
//         </div>
//       </div>
//       <div 
//         style={{width: `${width}px`}} className='hidden overflow-x-hidden md:block'>
//         <div 
//           style={{
//             width: `calc(${width}px*${numOfPanels})`,
//             transform: verified ? `translateX(${page}px)` : ''
//           }} className='flex transition-all'
//         >
//           {children}
//         </div>
//       </div>
//     </>
//   )
// }

// export default Container