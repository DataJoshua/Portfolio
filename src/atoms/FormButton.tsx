import { FormButtonProps } from "../types/AtomTypes";

const FormButton = ({ label , handleOnClick = ()=>{} , isInput = false } : FormButtonProps)=> {
  
  const styles = "py-6 px-3 bg-blue-300";

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
