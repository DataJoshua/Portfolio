export interface NavLinkProps {
  path : string
  label :string
  handleOnClick : Function
}

export interface ButtonProp {
  label : string
  handleOnClick : Function
}

export interface FooterLinkProps {
  path : string
  label : string
}

export interface FormButtonProps {
  label : string
  isInput? : boolean
  handleOnClick? : Function
}

export interface SpinnerProps {
  hasMargin? : boolean
  hasText? : boolean
  size? : string
}