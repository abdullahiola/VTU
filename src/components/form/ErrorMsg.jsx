import React from 'react'

const ErrorMsg = ({children}) => {
  return (
    <div className='mt-4 pl-4 text-red text-sm font-semibold'>{children}</div>
  )
}

export default ErrorMsg