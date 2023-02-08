import React, { useState, lazy, Fragment } from 'react'
import TransactionFlowProvider from '../../../../context/TransactionFlowContext'
import { DataFlowPropsType } from '../../../../types/flow.type'
const Phase1 = lazy(() => import('./Phase1'))
const Phase2 = lazy(() => import('./Phase2'))
const Phase3 = lazy(() => import('./Phase3'))
const Phase4 = lazy(() => import('./Phase4'))

const DataFlow = ({route}: DataFlowPropsType) => {

  return (
    <Fragment>
      <TransactionFlowProvider>
        {
          route === '1' && <Phase1 /> ||
          route === '2' && <Phase2 /> ||
          route === '3' && <Phase3 /> ||
          route === '4' && <Phase4 />
        }
      </TransactionFlowProvider>
    </Fragment>
  )
}

export default DataFlow