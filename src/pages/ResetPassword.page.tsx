import React, { Fragment, useContext, useRef, useState } from 'react'
import DownloadMobile from '../components/ui/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import LogoHeader from '../components/ui/LogoHeader'
import { useUserData } from '../hooks/useUserData'
import { AppContext } from '../context/AppContext'
import Loading from '../components/utilities/Loading'
import Modal from '../components/utilities/Modal'
import Input from '../components/form/Input'
import Button from '../components/form/Button'
import { UserType } from '../components/form/Types'

type ValueType = {
  email: string
}

const ResetPassword = () => {

  const queryId = 'reset'

  const onSuccess = (data: {[key: string]: any}) => {
    const userData =  data.data.filter((user: UserType) => {
      return user.email === emailRef.current
    })
    if (userData.length) {
      setErrorState(false)
      setValidateUserAccess!(true)
      setUserId!(userData[0].id)
      navigate("/confirm-reset")
    } else if (!userData.length && emailRef.current) {
      setErrorState(true)
    }
  }

  const onError = () => {
    setNetworkError(true)
  }

  const {error, isLoading, refetch} = useUserData(queryId, onSuccess, onError)
  const {setValidateUserAccess, setUserId} = useContext(AppContext)
  const [errorState, setErrorState] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const emailRef = useRef<string | null>(null)
  const navigate = useNavigate()

  const onSubmit = (values: ValueType) => {
    emailRef.current = values.email
    refetch()
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("This field is required")
  })

  const initialValues = {
    email: ''
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
        errorState && <Modal closeModal={closeErrorModal}>Email not found</Modal>
      }
      {
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error && error.message} <br />Please try again!</Modal>
      }
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[600px] justify-between'>
          <div className="pt-12 pb-16 mx-auto h-full w-full max-w-[360px]">
            <h6 className='text-center pb-8'>Reset Password</h6>
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
                        <div className='w-full relative'>
                          <Button disabled={(formik.isSubmitting && isLoading)}>{isLoading ? "Verifying" : "Confirm"}</Button>
                          { isLoading && <div className=' absolute left-3 h-4/5 aspect-square top-1/2 -translate-y-1/2'><Loading mini /></div>}
                        </div>
                      </Form>
                      <span className=' text-gray-300 text-sm'>Remembered your password? <Link to='/login' className=' text-purple hover:underline'>Log In</Link></span>
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

export default ResetPassword