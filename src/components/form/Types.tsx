export type FormikHelperType = FormType & FieldType

type FormType = {
  form: FormKeyType
}

type FieldType = {
  field: FieldKeyType
}

export type FieldKeyType = {
  [key: string]: any
}

export type FormKeyType = {
  [key: string]: any
}

export type VisibilityType = {
  [key: string]: boolean
}

export type SetVisibilityType = React.Dispatch<React.SetStateAction<VisibilityType>>

export type UserType = {
  id: string
  email: string
  password: string
}


