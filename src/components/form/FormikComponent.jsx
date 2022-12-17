import React from 'react'
import Input from './Input';

const FormikComponent = (props) => {

  const {control, ...rest} = props;
  
  switch (control) {
    case 'input': return <Input {...rest} />
    case 'textarea':
    case 'radio':
    case 'checkbox':
    case 'select':
    case 'date':
  
    default: break
  }

}

export default FormikComponent