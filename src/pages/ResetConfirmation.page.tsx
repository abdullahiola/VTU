import React, { Fragment, useContext, useEffect, useRef, useState } from 'react'
import DownloadMobile from '../components/ui/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import LogoHeader from '../components/ui/LogoHeader'
import { ErrorTypes, SingleType, useEditUser, useSingleUser } from '../hooks/useUserData'
import Loading from '../components/utilities/Loading'
import Modal from '../components/utilities/Modal'
import { AppContext } from '../context/AppContext'
import { UseQueryResult } from 'react-query'
import { UserType, VisibilityType } from '../components/form/Types'
import Input from '../components/form/Input'
import Button from '../components/form/Button'

type FormValueType = {
  oldPassword: string 
  newPassword: string 
}

const ResetConfirmation = () => {

  const onSuccess = (data: {[key: string]: any}) => {
    const userPassword = data.data.password
      if (userPassword === oldPasswordRef.current) {
        editUser({...data.data, password: newPasswordRef.current!})
        reset(resetRef.current!)
      } else if ((userPassword && oldPasswordRef.current && newPasswordRef.current) && (userPassword !== oldPasswordRef.current)) {
        setErrorState(true)
      }
  }

  const onError = () => {
    setNetworkError(true)
  }

  const {validateUserAccess, userId} = useContext(AppContext)
  const {isLoading: queryLoading, isError, error, refetch}: UseQueryResult<SingleType, ErrorTypes> = useSingleUser(userId!, onSuccess, onError)
  const {mutate: editInfo,  isLoading: mutateLoading, } = useEditUser()
  const [visibility, setVisibility] = useState<VisibilityType>({oldPassword: false, newPassword: false})
  const [errorState, setErrorState] = useState(false)
  const [networkError, setNetworkError] = useState(false)
  const resetRef = useRef<(() => void) | null>(null)
  const oldPasswordRef = useRef<string | null>(null)
  const newPasswordRef = useRef<string | null>(null)
  const navigate = useNavigate()

  const reset = (fn: () => void) => { 
    fn()
    oldPasswordRef.current = null
    newPasswordRef.current = null
   }

   const editUser = (userDetails: UserType) => {
    editInfo(userDetails)
   }
   
  const onSubmit = (values: FormValueType, {resetForm}: {resetForm: () => void}) => {
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
        networkError && <Modal closeModal={closeNetworkErrorModal}>{error && error.message} <br />Please try again!</Modal> 
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
                        <Input id='oldPassword' name='oldPassword' type='password' label='Password: ' placeholder='********' required visibility={visibility} setVisibility={setVisibility} />
                        <Input id='newPassword' name='newPassword' type='password' label='New password: ' placeholder='********' required visibility={visibility} setVisibility={setVisibility} />
                        <div className='w-full relative'>
                          <Button disabled={(formik.isSubmitting && (queryLoading || mutateLoading))}>{(queryLoading ? "Verifying" : "Confirm") || (mutateLoading ? "Reseting" : "Confirm")}</Button>
                          { (queryLoading || mutateLoading) && <div className=' absolute left-3 h-4/5 aspect-square top-1/2 -translate-y-1/2'><Loading mini /></div>}
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


