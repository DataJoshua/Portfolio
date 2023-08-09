interface ProjectForm extends HTMLFormControlsCollection {
  title : HTMLInputElement
  description : HTMLInputElement
  image : HTMLInputElement
}

export interface ProjectFormElement extends HTMLFormElement{
  readonly elements: ProjectForm;
}