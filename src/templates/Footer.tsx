import githubSvg from "../assets/github.svg";
import linkedInSvg from "../assets/linkedin.svg";

const Footer = ()=> {
  return (
    <>
      <div className="bg-slate-900 px-[15%] grid-cols-1 sm:grid grid-cols-2 py-8 px-8 gap-5">
        <div className="flex flex-col gap-3">
          <a href="https://github.com/datajoshua" target="_blank">
            <div className="flex gap-3 items-center">
              <img src={githubSvg} alt="github" />
              <p className="hover:underline hover:cursor-pointer">@joshuaRod</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/rodriguez-joshua/" target="_blank">
            <div className="flex gap-3 items-center">
              <img src={linkedInSvg} alt="linkedin" />
              <p className="hover:underline hover:cursor-pointer">@DataJoshua</p>
            </div>
          </a>
        </div>
        <div className="flex items-center">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet deserunt nostrum molestias possimus blanditiis rem unde minima fugit! Quod, maxime.</p>
        </div>
      </div>
    </>  
  )
}

export default Footer;
