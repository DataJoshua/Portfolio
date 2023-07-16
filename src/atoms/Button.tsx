import { ButtonProp } from "../types/AtomTypes";

const Button = ({handleOnClick, label} : ButtonProp)=> {
  return <button 
    onClick={(e : React.MouseEvent<HTMLButtonElement, MouseEvent>)=> handleOnClick(e)}
    className="bg-[#1939ff] text-2xl py-2"
  >{label}</button>
}

export default Button;