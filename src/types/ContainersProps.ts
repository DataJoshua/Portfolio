import { ReactNode } from "react";
import { ProjectProps } from "./OrganismsTypes";

export interface FrameContainerProp {
  children : ReactNode
}

interface FormInputs extends HTMLFormControlsCollection{
  email: HTMLInputElement
  title : HTMLInputElement
  message : HTMLInputElement
}

export interface ContactFormInputs extends HTMLFormElement {
  readonly elements: FormInputs
}

export interface InputsContainersProps {

}

export interface ProjectsContainerProps {
  projects: Array<ProjectProps> | []
}