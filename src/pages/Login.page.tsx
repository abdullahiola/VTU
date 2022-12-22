import React, { Fragment, useEffect, useRef, useState } from 'react'
import DownloadMobile from '../components/ui/DownloadMobile'
import { Form, Formik, FormikState } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import LogoHeader from '../components/ui/LogoHeader'
import { DetailsTypes, ErrorTypes, useUserData } from '../hooks/useUserData'
import Loading from '../components/utilities/Loading'
import Modal from '../components/utilities/Modal'
import Input from '../components/form/Input'
import { VisibilityType } from '../components/form/Types'
import { UseQueryResult } from 'react-query'
import Button from '../components/form/Button'

type ValueType = {
  email: string
  password: string
}


const Login = () => {

  const {data, isLoading, isError, error, refetch}: UseQueryResult<DetailsTypes, ErrorTypes> = useUserData()
  const resetRef = useRef<(() => void) | null>(null)
  const userEmailRef = useRef<string | null>(null)
  const userPasswordRef = useRef<string | null>(null)
  const [visibility, setVisibility] = useState<VisibilityType>({password: false})
  const [errorState, setErrorState] = useState(false)
  const [networkError, setNetworkError] = useState(false)

  useEffect(() => {
    if (isError) {
      setNetworkError(true)
    }
  }, [isError])

  useEffect(() => {
    if (data?.data) {
      const userDetails = data.data.filter(user => {
        return (user.email === userEmailRef.current) && (user.password === userPasswordRef.current)
      })
      if (userDetails.length) {
        if (resetRef.current) {
          reset(resetRef.current)
        }
      } else if (!userDetails.length && (userEmailRef.current && userPasswordRef.current)) {
        setErrorState(true)
      }
    }
  
  }, [data])
  
  const reset = (fn: () => void) => { 
    fn()
    userEmailRef.current = null
    userPasswordRef.current = null
   }

  const onSubmit = (values: ValueType, {resetForm}: {resetForm: (nextState?: Partial<FormikState<ValueType>>) => void}) => {
    userEmailRef.current = values.email
    userPasswordRef.current = values.password
    resetRef.current = resetForm
    refetch()
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("This field is required"),
    password: Yup.string().min(7, "Password cannot be less than 7 characters").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/, "Password should contain at least one capital letter, one small letter and one number (e.g Johndoe1)").required("This field is required"),
  })

  const initialValues = {
    email: '',
    password: '',
  }

  const closeErrorModal = () => {
    setErrorState(false)
  }

  const closeNetworkErrorModal = () => {
    setNetworkError(false)
  }

  
  return (
    <div className='min-h-screen'>
      {
        errorState && <Modal closeModal={closeErrorModal}>Login parameters are invalid!</Modal> 
      }
      {
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error && error.message} <br />Please try again!</Modal> 
      }
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[600px] justify-between'>
          <div className="pt-12 pb-16 mx-auto h-full w-full max-w-[360px]">
            <h6 className=' text-center pb-8'>Log In</h6>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Fragment>
                <Form>
                  <Input id='email' name='email' type='email' label='Email address' placeholder='email address' required />
                  <Input id='password' name='password' type='password' label='Password' placeholder='********' fPassword='Forgot Password?' visibility={visibility} setVisibility={setVisibility}  required />
                  <div className='w-full relative'>
                    <Button>{isLoading ? "LOGGING IN" : "Login"}</Button>
                    { isLoading && <div className=' absolute left-3 h-4/5 aspect-square top-1/2 -translate-y-1/2'><Loading mini /></div>}
                  </div>
                </Form>
                <span className=' text-gray-300 text-sm'>Want to Join voom? <Link to='/signup' className=' text-purple hover:underline'>Sign Up</Link></span>
              </Fragment>
            </Formik>
          </div>
          <DownloadMobile />
        </div>
      </div>
    </div>
  )
}

export default Login