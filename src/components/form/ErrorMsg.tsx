import React from 'react'

type ErrorMessagePropsType = {
  children?: React.ReactNode
}

const ErrorMsg = ({children}: ErrorMessagePropsType) => {
  return (
    <div className='mt-4 pl-4 text-red text-sm font-semibold'>{children}</div>
  )
}

export default ErrorMsg