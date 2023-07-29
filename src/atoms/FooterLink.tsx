import { Link } from "react-router-dom";
import { FooterLinkProps } from "../types/AtomTypes";

const FooterLink = ( { path, label } : FooterLinkProps ) => {
  return <li className="hover:cursor-pointer hover:underline"><Link to={path}>{label}</Link></li>
};

export default FooterLink;