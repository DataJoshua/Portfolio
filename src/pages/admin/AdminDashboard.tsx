import { FormEvent, useContext, useState } from "react";
import { SupaContext } from "../../context/SupaContext";
import { Payload } from "../../context/ContextTypes";
import FormInput from "../../organisms/FormInput";
import { ProjectFormElement } from "../../types/AdminTypes";
import { nanoid } from "nanoid";
import NotificationElement from "../../organisms/NotificationElement";
import FormButton from "../../atoms/FormButton";
import Spinner from "../../atoms/Spinner";
import FrameContainer from "../../containers/FrameContainer";

function AdminDashboard() {
 
  const {client} = useContext(SupaContext) as Payload;
  const [notification, setNotification] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleOnSubmit = async (e : FormEvent<ProjectFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const {title, description, image, gitUrl} = e.currentTarget.elements;

    const files = image.files as FileList;
    const filesPaths = [];
    
    for(let i = 0; i < files.length; i++) {

      const file = files.item(i);
      const { data : imgdata, error: imgUploadError} = await client
                                          .storage
                                          .from("projects")
                                          .upload(`public/${nanoid()}_${file?.name}`, file as File)
      if(imgUploadError){
        setIsLoading(false);
        setNotification(`There was an error uploading the image named: ${file?.name}!, try again`);

        return;
      }

      const {data : {publicUrl}} = client.storage.from("projects").getPublicUrl(imgdata.path); 

      if(!publicUrl){
        setIsLoading(false);
        setNotification(`The public Url was not received from the DB for the file named: ${file?.name}`);

        return;
      }

      filesPaths.push(publicUrl); 
    }

    const { status, error } = await client.from("projects").insert({
      title: title.value,
      description: description.value,
      gitUrl : gitUrl.value,
      images: filesPaths
    });

    if(error){
      setIsLoading(false);
      setNotification(`The project was not saved, status: ${status}, ${error.message}`);

      return;
    }

    title.value = "";
    description.value = "";
    gitUrl.value = "";
    image.value = "";

    setNotification("Project created succesfully!");
    setIsLoading(false);
  }
  
  return (
    <FrameContainer>
      {notification && <NotificationElement text={notification}/>}
      <h1 className="text-3xl text-center my-8">Create new Project</h1>
      <div className="max-w-lg m-auto">
        <form action="post" className="flex flex-col items-center" onSubmit={handleOnSubmit}>
          <FormInput label="title" name="title" state/>
          <FormInput label="description" name="description" state/>
          <FormInput label="Repo Link" name="gitUrl" state/>
          <FormInput label="image" name="image" type="file" state/>

          <div className="flex gap-[50px] items-center justify-center">
            <FormButton isInput label="Create Project"/>
           {isLoading && <Spinner size={20}/>}
          </div>
        </form>
      </div>
    </FrameContainer>
  );
}

export default AdminDashboard;
