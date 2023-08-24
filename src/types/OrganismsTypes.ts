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
  submitLabel? : string
}

export interface ProjectProps {
  id : number
  title : string
  description : string
  images : Array<String>
  gitUrl: string
}

export interface ErrorElementProps {
  text : string
}