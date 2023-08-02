import FrameContainer from "../containers/FrameContainer";
import InputsContainer from "../containers/InputsContainer";
import { ContactFormInputs } from "../types/ContainersProps";

const Contact = () => {

  const handleOnSubmit = (e : React.FormEvent<ContactFormInputs>) => {
    e.preventDefault();
    console.log("submiting.............");

    const { email, title, message } = e.currentTarget.elements;
  }

  return(
    <>
      <FrameContainer>
        <article className="bg-slate-800 max-w-lg m-auto my-8">
          <form action="#" className="flex gap-8 items-center gap-4 overflow-hidden" onSubmit={handleOnSubmit}>
            <InputsContainer/>
          </form>
        </article>
      </FrameContainer>
    </>
  )
}

export default Contact;
