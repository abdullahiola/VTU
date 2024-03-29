import React, { Fragment, useRef, useContext, useState } from 'react'
import DownloadMobile from '../../components/ui/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import LogoHeader from '../../components/ui/LogoHeader'
import { useCreateUser, useUserData } from '../../hooks/useUserData'
import Modal from '../../components/utilities/Modal'
import Loading from '../../components/utilities/Loading'
import { VisibilityType } from '../../types/form.types'
import { UserType } from '../../types/global.types'
import Input from '../../components/form/Input'
import Button from '../../components/form/Button'
import { AuthContext } from '../../auth/Auth'
import { UserDataContext } from '../../context/UserDataContext'

type ValueType = {
  email: string
  password: string
  refCode: string
}

const Signup = () => {

  const queryId = 'signup'

  const onSuccess = (data: {[key: string]: any}) => {
    const existUser = data.data.filter((user: UserType) => {
      return user.email === userIdRef.current
    })
    if (existUser.length) {
      setErrorState(true)
    } else if (!existUser.length && (userIdRef.current && userPasswordRef.current)) {
      const id = generateId()
      postUser({id, email: userIdRef.current, password: userPasswordRef.current})
      reset(resetRef.current!)
      // setUserEmail(userIdRef.current)
      login()
    }
  }

  const onError = () => {
    setNetworkError(true)
  }

  const {mutate: createUser} = useCreateUser()
  const {isLoading, error, refetch} = useUserData(queryId, onSuccess, onError)
  const {login} = useContext(AuthContext)
  const {setUserEmail} = useContext(UserDataContext)
  const [errorState, setErrorState] = useState(false)
  const [visibility, setVisibility] = useState<VisibilityType>({password: false})
  const [networkError, setNetworkError] = useState(false)
  const resetRef = useRef<(() => void) | null>(null)
  const userIdRef = useRef<string | null>(null)
  const userPasswordRef = useRef<string | null>(null)
  
  const reset = (fn: () => void) => { 
    fn()
    userIdRef.current = null
    userPasswordRef.current = null
    setVisibility({password: false})
   }

   const postUser = (userDetail: UserType) => {
     createUser(userDetail)
   }

   const generateId = () => {
    return uuid()
   }

  const onSubmit = (values: ValueType, {resetForm}: {resetForm: () => void}) => {
    userIdRef.current = values.email
    userPasswordRef.current = values.password
    resetRef.current = resetForm
    refetch()
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("This field is required"),
    password: Yup.string().min(7, "Password cannot be less than 7 characters").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/, "Password should contain at least one capital letter, one small letter and one number (e.g Johndoe1)").required("This field is required"),
    refCode: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,7}$/, "Invalid code , Please input a correct  referral code"),
  })

  const initialValues = {
    email: '',
    password: '',
    refCode: '',
  }
  
  const closeErrorModal = () => {
    setErrorState(false)
  }

  const closeNetworkErrorModal = () => {
    setNetworkError(false)
  }
    
  return (
    <div className="min-h-screen">
      {
        errorState && <Modal closeModal={closeErrorModal}>Email address already in use.</Modal>
      }
      {
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error && error.message} <br />Please try again</Modal>
      }
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[728px] justify-between'>
          <div className="pt-12 pb-16 mx-auto w-full max-w-[360px]">
            <h6 className=' text-center pb-8'>Sign Up</h6>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {
                formik => {
                  return (
                    <Fragment>
                      <Form>
                        <Input id='email' name='email' type='email' label='Email address' placeholder='email address' required />
                        <Input id='password' name='password' type='password' label='Password' placeholder='********' fPassword='Forgot Password?' required={true} visibility={visibility} setVisibility={setVisibility} />
                        <Input id='refCode' name='refCode' type='text' label='Referral code' required={false} />
                        <div className='w-full relative'>
                          <Button disabled={(formik.isSubmitting && isLoading)}>{isLoading ? "Signing Up" : "Sign Up"}</Button>
                          { isLoading && <div className=' absolute left-3 h-4/5 aspect-square top-1/2 -translate-y-1/2'><Loading mini /></div>}
                        </div>
                      </Form>
                      <span className=' text-gray-300 text-sm'>Already on voom?  <Link to='/login' className=' text-purple hover:underline'>Log In</Link></span>
                    </Fragment>
                  )
                }
              }
            </Formik>
          </div>
          <DownloadMobile />
        </div>
      </div>
    </div>
  )
}

export default Signup