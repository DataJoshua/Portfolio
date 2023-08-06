import { useContext, useState } from "react";
import FrameContainer from "../containers/FrameContainer";
import InputsContainer from "../containers/InputsContainer";
import { ContactFormInputs } from "../types/ContainersProps";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";

const Contact = () => {

  const { client } = useContext(SupaContext) as Payload;

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
      email.value = "";
      title.value = "";
      message.value = "";
    }    
    else{
      console.log(error);
    }
  }

  return(
    <>
      <FrameContainer>
        <article className="max-w-xs sm:max-w-sm m-auto my-8 flex flex-col gap-3 sm:gap-20">
          <h1 className="text-center text-2xl font-bold">Contact Me</h1>
          <form action="#" onSubmit={handleOnSubmit}>
            <InputsContainer/>
          </form>
        </article>
      </FrameContainer>
    </>
  )
}

export default Contact;
