import FormButton from "../atoms/FormButton";
import { FormInputProps } from "../types/OrganismsTypes";

const FormInput = ({label, name, state, handleOnNext, handleOnPrev, isTextArea = false, isSubmit = false, type ="text"}: FormInputProps ) => {
  const formStyles = "px-3 py-2 text-[#000] outline-none rounded border-b-4 border-indigo-600 focus:border-blue-500 transition"

  return (
    <>
      <div className={`min-w-[100%] py-8 flex gap-5 items-center justify-center ${state ? "" : "hidden"}`}>
        <label className="text text-xl">{label}</label>
        {isTextArea? <textarea className={formStyles + " max-h-[300px] min-h-[90px]"} name={name}/> : <input className={formStyles} type={type} name={name}/>}
        <div className="flex flex-col min-h-full gap-8">
          {handleOnPrev && <FormButton label="prev" handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleOnPrev(e)} />}
          {handleOnNext && <FormButton label="next" handleOnClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleOnNext(e)} />}
          {isSubmit && <FormButton label="Submit" isInput/>}
        </div>
      </div>
    </>
  )  
}

export default FormInput;
