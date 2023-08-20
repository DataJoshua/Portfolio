import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";
import { ProjectProps } from "../types/OrganismsTypes";
import { useParams } from "react-router-dom";
import Spinner from "../atoms/Spinner";

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
      setIsLoading(false);
      setProject(data[0] as ProjectProps);
    }
  }

  useEffect(()=>{
    setProjects();
  }, []);

  if(isLoading) return <Spinner/>

  return( 
    <>
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
      <img src={project?.image} alt={project?.title} />
    </>
  );
}

export default ProjectShow;
