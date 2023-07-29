import { FormInputProps } from "../types/OrganismsTypes";

const FormInput = ({label, name, hasButton = false, handleOnClick = ()=>{}, isTextArea = false, type ="text"}: FormInputProps ) => {
  const fromStyles = "px-3 py-2 text-[#000] outline-none rounded border-b-4 border-indigo-600 focus:border-blue-500 transition"

  return (
    <>
      <div className={`flex gap-5 w-[100%] items-center`}>
        <label className="text text-xl">{label}</label>
        {isTextArea? <textarea className={fromStyles + " max-h-[300px] min-h-[90px]"} name={name}/> : <input className={fromStyles} type={type} name={name}/>}
        {hasButton && <button onClick={()=> handleOnClick()}>Next</button>}
      </div>
    </>
  )  
}

export default FormInput;

