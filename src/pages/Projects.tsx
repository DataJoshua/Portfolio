import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import Project from "../containers/Project";
import FrameContainer from "../containers/FrameContainer";
import { ProjectProps } from "../types/OrganismsTypes";
import { Payload } from "../context/ContextTypes";


const Projects = () => {
  const { client } = useContext(SupaContext) as Payload;

  const [projects, setProjects] = useState<Array<ProjectProps> | []>([]); 

  const makeApiCall = async ()=> {
    const { data, error } = await client.from("projects").select();
    if(!error){      
      setProjects(data);
    }
    else{
      console.log(error);
    }
  }

  useEffect(()=>{
    makeApiCall();
  }, []);

  return (
    <FrameContainer>
      <h1 className="text-3xl font-bold my-8 text-center text-white">My Projects</h1>
      <div className="gap-8 mx-[5%] sm:mx-[10%] lg:mx-[15%] grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 place-content-center pb-8">
        {projects.map(val=> <Project title={val.title} description={val.description} image={val.image}/> )}
      </div>
    </FrameContainer>
  );
};

export default Projects;
