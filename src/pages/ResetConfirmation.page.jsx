import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import DownloadMobile from '../components/ui/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikComponent from '../components/form/FormikComponent'
import { Link, useNavigate } from 'react-router-dom'
import LogoHeader from '../components/ui/LogoHeader'
import { useEditUser, useSingleUser } from '../hooks/useUserData'
import Loading from '../components/utilities/Loading'
import Modal from '../components/utilities/Modal'
import { AppContext } from '../context/AppContext'

const ResetConfirmation = () => {

  const {validateUserAccess, userId} = useContext(AppContext)
  const {data, isLoading: queryLoading, isError, error, refetch} = useSingleUser(null, null, userId)
  const {mutate: editInfo,  isLoading: mutateLoading, } = useEditUser()
  const [visibility, setVisibility] = useState({oldPassword: false, newPassword: false})
  const [errorState, setErrorState] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const resetRef = useRef(null)
  const oldPasswordRef = useRef(null)
  const newPasswordRef = useRef(null)
  const navigate = useNavigate()

  const reset = (fn) => { 
    fn()
    oldPasswordRef.current = null
    newPasswordRef.current = null
   }

   const editUser = (userDetails) => {
    editInfo(userDetails)
   }

   useEffect(() => {
    if (isError) {
      setErrorState(true)
    }
    
  }, [isError])

   useEffect(() => {
     if (data?.data) {
       const userPassword = data.data.password
       if (userPassword === oldPasswordRef.current) {
        editUser({...data.data, password: newPasswordRef.current})
        reset(resetRef.current)
      } else if (userPassword && (userPassword !== oldPasswordRef.current)) {
        setErrorState(true)
      }
     }
   
   }, [data])
   
  const onSubmit = (values, {resetForm}) => {
    oldPasswordRef.current = values.oldPassword
    newPasswordRef.current = values.newPassword
    resetRef.current = resetForm
    refetch()
  }

  const validationSchema = Yup.object({
    oldPassword: Yup.string().required("This field is required"),
    newPassword: Yup.string().min(7, "Password cannot be less than 7 characters").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{7,}$/, "Password should contain at least one capital letter, one small letter and one number (e.g Johndoe1)").required("This field is required"),
  })

  const initialValues = {
    oldPassword: '',
    newPassword: '',
  }

  const closeErrorModal = () => {
    setErrorState(false)
  }

  const closeNetworkErrorModal = () => {
    setNetworkError(false)
  }

  useEffect(() => {
    if (!validateUserAccess) {
      navigate("/login")
    }
  
  }, [validateUserAccess])
  

  return (
    <div className='min-h-screen'>
      {
        errorState && <Modal closeModal={closeErrorModal}>Enter correct password</Modal> 
      }
      {
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error.message} <br />Please try again!</Modal> 
      }
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[600px] justify-between'>
          <div className="pt-12 pb-16 mx-auto h-full w-full max-w-[360px]">
            <h6 className=' text-center pb-8'>Confirm New Password</h6>
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
                        <FormikComponent control='input' id='oldPassword' name='oldPassword' type='password' label='Password: ' placeholder='********' required={true} visibility={visibility} setVisibility={setVisibility} />
                        <FormikComponent control='input' id='newPassword' name='newPassword' type='password' label='New password: ' placeholder='********' required={true} visibility={visibility} setVisibility={setVisibility} />
                        <div className='w-full relative'>
                          <button className='submit__btn' type="submit">Confirm</button>
                          { queryLoading || mutateLoading && <div className=' absolute left-3 h-4/5 aspect-square top-1/2 -translate-y-1/2'><Loading mini /></div>}
                        </div>
                      </Form>
                      <span className=' text-gray-300 text-sm'>Remembered your password? <Link to='/login' className=' text-purple hover:underline'>Login</Link></span>
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

export default ResetConfirmation


