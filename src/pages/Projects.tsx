import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import Project from "../containers/Project";
import FrameContainer from "../containers/FrameContainer";
import { ProjectProps } from "../types/OrganismsTypes";
import { Payload } from "../context/ContextTypes";
import Spinner from "../atoms/Spinner";
import ProjectsContainer from "../containers/ProjectsContainer";


const Projects = () => {
  const { client } = useContext(SupaContext) as Payload;

  const [projects, setProjects] = useState<Array<ProjectProps> | []>([]); 
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const makeApiCall = async ()=> {
    const { data, error } = await client.from("projects").select();
    if(!error){      
      setProjects(data);
      setIsLoading(false);
    }
    else{
      console.log(error);
    }
  }

  useEffect(() =>{
    makeApiCall();
  
  }, []);

  return (
    <FrameContainer>
      <h1 className="text-3xl font-bold my-8 text-center text-white">My Projects</h1>
      {isLoading ? <Spinner hasMargin hasText/> : <ProjectsContainer projects={projects}/> }
    </FrameContainer>
  );
};

export default Projects;
