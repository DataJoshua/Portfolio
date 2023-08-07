import { useRef, useState } from "react";
import FormInput from "../organisms/FormInput";
import { InputsContainersProps } from "../types/ContainersProps";

const InputsContainer = ({} : InputsContainersProps) => {

  const states = useRef<Array<Array<number>>>([[1,0,0], [0,1,0], [0,0,1]]);
  const [state, setState] = useState<number>(0);

  const handleOnNext = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setState(prev => prev + 1);
  }

  const handleOnPrev = (e : React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setState(prev => prev - 1);
  }

  return(
    <>
      <FormInput 
        label="Email" 
        name="email" 
        state={!!states.current[state][0]} 
        handleOnNext={handleOnNext}
      />
      <FormInput 
        label="Title" 
        name="title"
        state={!!states.current[state][1]} 
        handleOnNext={handleOnNext}
        handleOnPrev={handleOnPrev}
      />
      <FormInput 
        label="Message" 
        name="message" 
        state={!!states.current[state][2]} 
        handleOnPrev={handleOnPrev}
        isSubmit
        isTextArea
      />
    </>
  )
}

export default InputsContainer;
