import { ProjectsContainerProps } from "../types/ContainersProps";
import Project from "./Project";

const ProjectsContainer = ({projects} : ProjectsContainerProps) => {
  return (
    <div className="gap-8 mx-[5%] sm:mx-[10%] lg:mx-[15%] grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 place-content-center pb-8">
      {projects.map(val => <Project key={val.id} id={val.id} title={val.title} description={val.description} images={val.images} gitUrl={val.gitUrl}/>)}
    </div>
  );
};

export default ProjectsContainer;
