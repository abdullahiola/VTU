import React from 'react'

type ButtonPropsType = {
  children: React.ReactNode
  disabled?: boolean
} & React.ComponentProps<'button'>

const Button = ({children, disabled}: ButtonPropsType) => {
  return (
    <button disabled={disabled} className='submit__btn' type="submit">{children}</button>
  )
}

export default Button