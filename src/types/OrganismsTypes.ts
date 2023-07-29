export interface FloatingNavProps {
  isHidden : boolean
  toggleNav : Function
}

export interface FormInputProps {
  name : string
  label : string
  handleOnClick? : Function
  hasButton? : boolean
  isTextArea? : boolean
  type? : string
}