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
      setProject(data[0] as ProjectProps);
      setIsLoading(false);
    }
  }

  useEffect(()=>{
    setProjects();
  }, []);

  if(isLoading) return <Spinner/>

  return( 
    <>
      <h1 className="text-4xl font-bold text-center mb-8">{project?.title}</h1>
      <p className="text-2xl text-center mb-8">{project?.description}</p>
      <div className="flex justify-center">
        <img src={project?.image} alt={project?.title} />
      </div>
    </>
  );
}

export default ProjectShow;
