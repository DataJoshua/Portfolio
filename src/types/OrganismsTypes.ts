export interface FloatingNavProps {
  isHidden : boolean
  toggleNav : Function
}

export interface FormInputProps {
  name : string
  label : string
  handleOnNext? : Function
  handleOnPrev? : Function
  hasButton? : boolean
  state? : boolean
  isSubmit? : boolean
  isTextArea? : boolean
  type? : string
}