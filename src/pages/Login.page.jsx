import React, { Fragment, useContext } from 'react'
import DownloadMobile from '../components/utilities/DownloadMobile'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import FormikComponent from '../components/form/FormikComponent'
import { Link } from 'react-router-dom'
import LogoHeader from '../components/utilities/LogoHeader'
import { AppContext } from '../context/AppContext'


const Login = () => {

  const {headerLogoHeight} = useContext(AppContext)

  const onSubmit = (values) => {
    console.log(values);
  }

  const validationSchema = Yup.object({
    email: Yup.string().email().required("This field is required"),
    password: Yup.string().min(6).required("This field is required"),
  })

  const initialValues = {
    email: '',
    password: '',
  }

  return (
    <div className='min-h-screen'>
      <LogoHeader />
      <div>
        <div className='px-6 h-full flex flex-col min-h-[728px] justify-between'>
          <div className="pt-12 pb-16 mx-auto h-full w-full max-w-[360px]">
            <h6 className=' text-center pb-8'>Log In</h6>
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
                        <FormikComponent control='input' meta={formik} id='password' name='password' type='password' label='Password' placeholder='********' fPassword='Forgot Password?' required={true} />
                        <button className='submit__btn' type="submit">Submit</button>
                      </Form>
                      <span className=' text-gray-300 text-sm'>Want to Join voom? <Link to='/signup' className=' text-purple hover:underline'>Sign Up</Link></span>
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

export default Login