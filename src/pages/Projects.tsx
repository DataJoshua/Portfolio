import { useContext } from "react";
import { SupaContext } from "../context/SupaContext";
import Project from "../containers/Project";


const Projects = () => {
  const client = useContext(SupaContext);
  
  const projects = [{
    title: "Some example",
    description: "lorem fnaiofnoa fuan ofa fuo",
    image : "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-thumb.jpg"
  },
  {
    title: "Some example",
    description: "lorem fnaiofnoa fuan ofa fuo",
    image : "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-thumb.jpg"
  },
  {
    title: "Some example",
    description: "lorem fnaiofnoa fuan ofa fuo",
    image : "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-thumb.jpg"
  },
  {
    title: "Some example",
    description: "lorem fnaiofnoa fuan ofa fuo",
    image : "https://c4.wallpaperflare.com/wallpaper/400/646/349/digital-digital-art-artwork-3d-night-hd-wallpaper-thumb.jpg"
  }]

  return (
    <div>
      <h1 className="text-3xl font-bold my-8 text-center text-white">My Projects</h1>
      <div className="gap-8 mx-[5%] sm:mx-[10%] lg:mx-[15%] grid grid-cols-1 sm:grid-cols-2 xxl:grid-cols-4 place-content-center">
        {projects.map(val=> <Project title={val.title} description={val.description} image={val.image}/> )}
      </div>
    </div>
  );
};

export default Projects;
