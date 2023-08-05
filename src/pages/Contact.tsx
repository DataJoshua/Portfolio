import { useContext, useState } from "react";
import FrameContainer from "../containers/FrameContainer";
import InputsContainer from "../containers/InputsContainer";
import { ContactFormInputs } from "../types/ContainersProps";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";

const Contact = () => {

  const { client } = useContext(SupaContext) as Payload;
  const [state, setState] = useState<number>(0);

  const handleOnSubmit = async (e : React.FormEvent<ContactFormInputs>) => {
    e.preventDefault();
    console.log("submiting.............");

    const { email, title, message } = e.currentTarget.elements;

  
    const { status, error } = await client.from("Forms").insert({
      email: email.value,
      title: title.value,
      message: message.value
    })

    if(status === 201){
      console.log("created");
      setState(0);
    }    
    else{
      console.log(error);
    }
  }

  return(
    <>
      <FrameContainer>
        <article className="bg-slate-800 max-w-lg m-auto my-8">
          <form action="#" className="flex gap-8 items-center gap-4 overflow-hidden" onSubmit={handleOnSubmit}>
            <InputsContainer formState={state}/>
          </form>
        </article>
      </FrameContainer>
    </>
  )
}

export default Contact;
