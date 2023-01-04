import React, { useState, lazy } from 'react'
import TransactionFlowProvider from '../../../../context/TransactionFlowContext'
import Overlay from '../../../utilities/Overlay'
import Container from '../FlowContainer'
const Phase1 = lazy(() => import('./Phase1'))
const Phase2 = lazy(() => import('./Phase2'))
const Phase3 = lazy(() => import('./Phase3'))
const Phase4 = lazy(() => import('./Phase4'))

const AirtimeFlow = () => {

  const [desktopPageNumber, setdesktopPageNumber] = useState(0)
  const [mobilePageNumber, setmobilePageNumber] = useState(0)

  return (
    <div>
      <TransactionFlowProvider>
        <div className='hidden w-full h-full md:block'>
          <Overlay opacity={0.65}>
            <Container width={432} page={desktopPageNumber} numOfPanels={4}>
              <div className='w-[432px]'>
                <Phase1 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='w-[432px]'>
                <Phase2 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='w-[432px]'>
                <Phase3 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='w-[432px]'>
                <Phase4 />
              </div>
            </Container>
          </Overlay>
        </div>
        <div className='w-screen min-h-screen md:hidden'>
          <Overlay opacity={0}>
            <Container width="screen" numOfPanels={4} page={mobilePageNumber}>
              <div className='min-w-full min-h-screen'>
                <Phase1 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='min-w-full min-h-screen'>
                <Phase2 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='min-w-full min-h-screen'>
                <Phase3 setDesktopNextPage={setdesktopPageNumber} setMobileNextPage={setmobilePageNumber} />
              </div>
              <div className='min-w-full min-h-screen'>
                <Phase4 />
              </div>
            </Container>
          </Overlay>
        </div>
      </TransactionFlowProvider>
    </div>
  )
}

export default AirtimeFlow