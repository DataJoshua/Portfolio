import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";
import { ProjectProps } from "../types/OrganismsTypes";
import { useParams } from "react-router-dom";
import Spinner from "../atoms/Spinner";
import FrameContainer from "../containers/FrameContainer";

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
      <h1 className="text-4xl font-bold text-center mb-8">{project?.title}</h1>
      <p className="text-2xl text-center mb-8">{project?.description}</p>
      <a className="block hover:cursor-pointer hover:underline text-center" href={project?.gitUrl} target="_blank">Visit Github code</a>
      <div className="flex justify-center">
        {project?.images.map(val=>  <img src={val as string} alt={project?.title} />)}
      </div>
    </FrameContainer>
  );
}

export default ProjectShow;
