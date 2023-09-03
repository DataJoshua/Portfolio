import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";
import { ProjectProps } from "../types/OrganismsTypes";
import { useParams } from "react-router-dom";
import Spinner from "../atoms/Spinner";
import FrameContainer from "../containers/FrameContainer";
import { Fade, Slide, Zoom } from "react-slideshow-image";
import Footer from "../templates/Footer";
import githubImg from "../assets/github.svg"

const divStyles = {
  height: "500px",
  backgroundRepeat: "no-repeat"
}

const ProjectShow = () => {
  
  const {client} = useContext(SupaContext) as Payload;
  const [project, setProject] = useState<ProjectProps | null>(null); 
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const { id } = useParams();

  const setProjects = async ()=> {
    const {error, data} = await client
                             .from("projects")
                             .select()
                             .eq("id", id);
    if(!error){
      setProject(data[0] as ProjectProps);
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    setProjects();
  }, []);

  if(isLoading) return <Spinner hasMargin hasText/>

  return( 
    <FrameContainer>      
      <div className="sm:mx-[200px] flex-col flex sm:flex-row gap-8 justify-around">
        <div className="text-center flex flex-col gap-8 mt-8">
          <h1 className="text-4xl text-center">{project?.title}</h1>
          <p className="text-2xl">{project?.description}</p>
          <div className="flex gap-3 items-center justify-center">
            <img src={githubImg} alt="github" />
            <p className="text-xl">Project on Github</p>
          </div>
        </div>
        <div className="w-[100%] sm:w-[600px] mb-[50px]">
          <Zoom scale={3.2}>
            {project?.images.map((image, index) => {
              return (
                  <div 
                  key={index} 
                  style={{...divStyles, "backgroundImage" : `url(${image})`}}>
                  </div>
              )
            })}
          </Zoom>
        </div>
      </div>
      <Footer/>
    </FrameContainer>
  );
}

export default ProjectShow;
