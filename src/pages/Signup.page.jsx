import React, { Fragment, useEffect, useRef, useState } from 'react'
import DownloadMobile from '../components/ui/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikComponent from '../components/form/FormikComponent'
import uuid from 'react-uuid'
import { Link } from 'react-router-dom'
import LogoHeader from '../components/ui/LogoHeader'
import { useCreateUser, useUserData } from '../hooks/useUserData'
import Modal from '../components/utilities/Modal'
import Loading from '../components/utilities/Loading'

const Signup = () => {

  const {mutate: createUser} = useCreateUser()
  const {data, isLoading, isError, error, refetch} = useUserData()
  const [errorState, setErrorState] = useState(false)
  const [visibility, setVisibility] = useState({password: false})
  const [networkError, setNetworkError] = useState(false)
  const resetRef = useRef(null)
  const userIdRef = useRef(null)
  const userPasswordRef = useRef(null)
  
  useEffect(() => {
    if(data?.data) {
      const existUser = data.data.filter(user => {
        return user.email === userIdRef.current
      })
      if (existUser.length) {
        setErrorState(true)
      } else if (!existUser.length && (userIdRef.current && userPasswordRef.current)) {
        const id = generateId()
        postUser({id, email: userIdRef.current, password: userPasswordRef.current})
        reset(resetRef.current)
      }
    }
  
  }, [data])

  useEffect(() => {
    if (isError) {
      setNetworkError(true)
    }
  }, [isError])

  const reset = (fn) => { 
    fn()
    userIdRef.current = null
    userPasswordRef.current = null
    setVisibility(false)
   }

   const postUser = (userDetail) => {
     createUser(userDetail)
   }

   const generateId = () => {
    return uuid()
   }

  const onSubmit = (values, {resetForm}) => {
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
    setErrorState(false)
  }
  
  
  return (
    <div className="min-h-screen">
      {
        errorState && <Modal closeModal={closeErrorModal}>Email address already in use.</Modal>
      }
      {
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error.message} <br />Please try again</Modal>
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
                        <FormikComponent control='input' id='email' name='email' type='email' label='Email address' placeholder='email address' required={true} />
                        <FormikComponent control='input' id='password' name='password' type='password' label='Password' placeholder='********' fPassword='Forgot Password?' required={true} visibility={visibility} setVisibility={setVisibility}/>
                        <FormikComponent control='input' id='refCode' name='refCode' type='text' label='Referral code' required={false} />
                        <div className='w-full relative'>
                          <button className='submit__btn' type="submit">Signup</button>
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