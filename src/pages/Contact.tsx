import FrameContainer from "../containers/FrameContainer";
import InputsContainer from "../containers/InputsContainer";

const Contact = () => {
  return(
    <>
      <FrameContainer>
        <article className="bg-slate-800 max-w-lg m-auto my-8">
          <form action="#" className="flex gap-8 items-center gap-4 overflow-hidden">
            <InputsContainer/>
          </form>
        </article>
      </FrameContainer>
    </>
  )
}

export default Contact;
