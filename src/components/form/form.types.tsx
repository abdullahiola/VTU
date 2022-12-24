import { ObjectShapeType } from "../../global.types"

export type FormikHelperType = FormType & FieldType

export type FormKeyType = ObjectShapeType

export type FieldKeyType = ObjectShapeType

type FieldType = {
  field: ObjectShapeType
}

type FormType = {
  form: ObjectShapeType
}

export type VisibilityType = {
  [key: string]: boolean
}

export type SetVisibilityType = React.Dispatch<React.SetStateAction<VisibilityType>>

export type FormWithPassword = {
  id: string
  name: string
  type: 'password'
  label: string
  required: boolean
  placeholder?: string
  fPassword?: string
  visibility: VisibilityType
  setVisibility: SetVisibilityType
}

export type FormWithOutPassword = {
  id: string
  name: string
  type: 'text' | 'email'
  label: string
  required: boolean
  placeholder?: string
  fPassword?: never
  visibility?: never
  setVisibility?: never
}
