import { ErrorMessage, Field } from 'formik'
import React from 'react'
import { Link } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
import {MdOutlineCancel} from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Alert from '../../assets/media/alert.svg'

const Input = (props) => {
  
  const {id, name, type, label} = props;

  const getStyle = (param, field) => {

    if ((param?.touched[field?.name] && param?.errors[field?.name])) {
      return {
        border: '2px solid #E41616',
        backgroundImage: `url(${Alert})`
      }
    }
    if ((param?.touched[field?.name] && !param?.errors[field?.name])) {
      return {
        border: '2px solid #00C297',
        backgroundColor: '#D7F4E4'
      }
    }
  }

  return (
    <div className="field--control mb-10">
      <div className='flex items-center justify-between mb-[3px]'>
        <label htmlFor={id} className='text-gray-400 text-base font-bold'>{label} <span className=' text-purple'>{props?.required ? '*' : null}</span></label>
        {props?.fPassword ? <Link to='/reset' className='text-green-300 text-sm text-right hover:underline'>{props.fPassword}</Link> : null}
      </div>
      <Field name={name}>
      {
        fieldFormik => {
          const {field, form} = fieldFormik
          
          return (
            <div className="relative">
              {
                type!=='password' ?
                <>
                  <input
                    type={type}
                    id={id}
                    {...field}
                    style={getStyle(form, field)}
                    placeholder={props?.placeholder}
                    className='block w-full text-base outline-none text-dark-200 p-4 border border-gray-200 rounded-lg bg-[calc(100%-18px)] bg-no-repeat placeholder:text-gray-100 focus:border-[#37C779]'
                  /> 
                  {
                    form.values[field.name]?.length && (form.touched[field.name] && !form.errors[field.name]) ? 
                    <MdOutlineCancel
                    style={{
                      backgroundColor: (form.touched[field?.name] && !form.errors[field?.name]) ? '#D7F4E4' : '',
                      zIndex: (form.touched[field?.name] && form.errors[field?.name]) ? -2 : ''
                    }}
                    onClick={() => form.setFieldValue(field.name, '', true)}
                      className=' absolute right-[18px] top-1/2 translate-y-[-50%] text-[20px] text-gray-400 cursor-pointer aspect-square'
                    /> : null
                  }
                </>
                : 
                <>
                  <input
                    type={(props?.visibility[name]?'text':'password')}
                    id={id}
                    {...field}
                    style={getStyle(form, field)}
                    placeholder={props?.placeholder}
                    className='block w-full text-base outline-none text-dark-200 p-4 border border-gray-200 rounded-lg bg-[calc(100%-18px)] bg-no-repeat placeholder:text-gray-100 focus:border-[#37C779]'
                  />
                  <div 
                    onClick={() => props?.setVisibility({...props?.visibility, [name]: !(props?.visibility[name])})}
                    style={{
                      backgroundColor: (form.touched[field?.name] && !form.errors[field?.name]) ? '#D7F4E4' : '',
                      zIndex: (form.touched[field?.name] && form.errors[field?.name]) ? -2 : ''
                    }}
                    className='absolute right-[2px] top-[2px] bottom-[2px] rounded-lg z-[2] w-[38px] flex items-center pl-1 bg-white'
                  >
                    {
                      props.visibility[name] ? 
                      <AiOutlineEyeInvisible
                        className=' text-[20px] text-gray-400 cursor-pointer aspect-square'
                      /> :
                      <AiOutlineEye
                      className=' text-[20px] text-gray-400 cursor-pointer aspect-square'
                      />
                    }
                  </div>
                </>
                }
            </div> 
          )
        }
      }
      </Field>
      <ErrorMessage name={name} component={ErrorMsg}/>
    </div>
  )
}

export default Input