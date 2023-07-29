import githubSvg from "../assets/github.svg";
import linkedInSvg from "../assets/linkedin.svg";
import { Link } from "react-router-dom";
import FooterLink from "../atoms/FooterLink";

const Footer = ()=> {
  return (
    <>
      <div className="bg-slate-900 px-[15%] grid grid-cols-2 py-8 px-8 gap-5">
        <div className="flex flex-col gap-3">
          <a href="https://github.com/datajoshua" target="_blank">
            <div className="flex gap-3 items-center">
              <img src={githubSvg} alt="github" />
              <p className="hidden sm:block hover:underline hover:cursor-pointer">@joshuaRod</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rodriguez-joshua/" target="_blank">
            <div className="flex gap-3 items-center">
              <img src={linkedInSvg} alt="linkedin" />
              <p className="hidden sm:block hover:underline hover:cursor-pointer">@DataJoshua</p>
            </div>
          </a>
        </div>
        <ul className="flex flex-col justify-center gap-4 w-full">
          <FooterLink path="/contact" label="Contact Me"/>
          <FooterLink path="/about" label="More about Me"/>
          <FooterLink path="/projects" label="See my projects"/>
        </ul>
      </div>
    </>  
  )
}

export default Footer;
