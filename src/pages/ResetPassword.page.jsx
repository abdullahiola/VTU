import React, { Fragment, useContext } from 'react'
import DownloadMobile from '../components/utilities/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikComponent from '../components/form/FormikComponent'
import { Link } from 'react-router-dom'
import LogoHeader from '../components/utilities/LogoHeader'

const ResetPassword = () => {

  const onSubmit = (values) => {
    console.log(values);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("This field is required")
  })

  const initialValues = {
    email: ''
  }


  return (
    <div className='min-h-screen'>
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[728px] justify-between'>
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
                        <FormikComponent control='input' meta={formik} id='email' name='email' type='email' label='Email address' placeholder='email address' required={true} />
                        <button className='submit__btn' type="submit">Submit</button>
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