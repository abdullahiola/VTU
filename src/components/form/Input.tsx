import { ErrorMessage, Field } from 'formik'
import React, {useRef, Fragment} from 'react'
import { Link } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
import {MdOutlineCancel} from 'react-icons/md'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import Alert from '../../assets/media/alert.svg'
import { FormikHelperType, FormKeyType, FieldKeyType, VisibilityType } from '../../types/form.types';
import { FormWithPassword, FormWithOutPassword } from '../../types/form.types';

type InputPropsType = FormWithPassword | FormWithOutPassword

const Input = (props: InputPropsType) => {

  const forgotRef = useRef<string | null>(null)

  const visibilityRef = useRef({} as VisibilityType)

  if (props.fPassword) {
    forgotRef.current = props.fPassword
  }

  if (props.visibility) {
    visibilityRef.current = props.visibility
  }

  const setStateStyleFn = (param: FormKeyType, field: FieldKeyType) => {

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

  const FormJsxFn = (form: FormKeyType , field: FieldKeyType) => {
    if (props.type !== 'password') {
      return (
        <Fragment>
          <input
            type={props.type}
            id={props.id}
            {...field}
            style={setStateStyleFn(form, field)}
            placeholder={props.placeholder}
            className='input__field'
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
         </Fragment>
      )
    } else {
      return (
        <Fragment>
          <input
            type={(visibilityRef.current[props.name]?'text':'password')}
            id={props.id}
            {...field}
            style={setStateStyleFn(form, field)}
            placeholder={props?.placeholder}
            className='input__field'
          />
          <div 
            onClick={
              () => 
                {
                  props.setVisibility ? props.setVisibility({...visibilityRef.current, [props.name]: !(visibilityRef.current[props.name])}) : null
              }
            }
            style={{
              backgroundColor: (form.touched[field?.name] && !form.errors[field?.name]) ? '#D7F4E4' : '',
              zIndex: (form.touched[field?.name] && form.errors[field?.name]) ? -2 : ''
            }}
            className='absolute right-[2px] top-[2px] bottom-[2px] rounded-lg z-[2] w-[38px] flex items-center pl-1 bg-white'
          >
            {
              visibilityRef.current[props.name] ? 
              <AiOutlineEyeInvisible
                className=' text-[20px] text-gray-400 cursor-pointer aspect-square'
              /> :
              <AiOutlineEye
              className=' text-[20px] text-gray-400 cursor-pointer aspect-square'
              />
            }
          </div>
        </Fragment>
      )
    }
  }

  return (
    <div className="field--control mb-10">
      <div className='flex items-center justify-between mb-[3px]'>
        <label htmlFor={props.id} className='text-gray-400 text-base font-bold'>{props.label} <span className=' text-purple'>{props.required ? '*' : null}</span></label>
        {forgotRef.current ? <Link to='/reset' className='text-green-300 text-sm text-right hover:underline'>{props.fPassword}</Link> : null}
      </div>
      <Field name={props.name}>
        {
          (fieldFormik: FormikHelperType) => {
            const {field, form} = fieldFormik
            return (
              <div className="relative">
                {
                  FormJsxFn(form, field)
                }
              </div> 
            )
          }
        }
      </Field>
      <ErrorMessage name={props.name} component={ErrorMsg}/>
    </div>
  )
}

export default Input