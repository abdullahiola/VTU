import React from 'react'

type ButtonPropsType = {
  children: React.ReactNode
}

const Button = ({children}: ButtonPropsType) => {
  return (
    <button className='submit__btn' type="submit">{children}</button>
  )
}

export default Button