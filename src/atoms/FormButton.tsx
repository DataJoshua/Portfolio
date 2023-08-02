import { FormButtonProps } from "../types/AtomTypes";

const FormButton = ({ label , handleOnClick = ()=>{} , isInput = false } : FormButtonProps)=> {
  
  const styles = "py-2 px-4 bg-blue-800 text-white rounded border-b-4 border-indigo-200 hover:cursor-pointer hover:bg-blue-700";

  return (
    <>
      {isInput ? <input type="submit" className={styles} /> : <button 
                                              className={styles}
                                              onClick={(e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleOnClick(e)}
                                            >
                                              {label}
                                            </button>}
    </>
  )
}

export default FormButton;
