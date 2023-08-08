import { ProjectsContainerProps } from "../types/ContainersProps";
import Project from "./Project";

const ProjectsContainer = ({projects} : ProjectsContainerProps) => {
  return (
    <div className="gap-8 mx-[5%] sm:mx-[10%] lg:mx-[15%] grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 place-content-center pb-8">
      {projects.map(val => <Project title={val.title} description={val.description} image={val.image}/>)}
    </div>
  );
};

export default ProjectsContainer;
