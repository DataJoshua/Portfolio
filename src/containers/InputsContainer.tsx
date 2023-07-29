import { useState } from "react";
import FormInput from "../organisms/FormInput"

const InputsContainer = () => {

  const [indexes, setIndexes] = useState<Array<number> | []>([30,20,0])

  return(
    <>
      <FormInput label="email:" name="email" hasButton/>
      <FormInput label="title:" name="title "/>
      <FormInput label="message:" name="message" isTextArea/>
      <input type="submit" />
    </>
  )
}

export default InputsContainer;