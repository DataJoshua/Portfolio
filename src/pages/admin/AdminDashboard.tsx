import { FormEvent, useContext, useState } from "react";
import { SupaContext } from "../../context/SupaContext";
import { Payload } from "../../context/ContextTypes";
import FormInput from "../../organisms/FormInput";
import { ProjectFormElement } from "../../types/AdminTypes";
import { nanoid } from "nanoid";
import NotificationElement from "../../organisms/NotificationElement";
import FormButton from "../../atoms/FormButton";
import Spinner from "../../atoms/Spinner";

function AdminDashboard() {
 
  const {client} = useContext(SupaContext) as Payload;
  const [notification, setNotification] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleOnSubmit = async (e : FormEvent<ProjectFormElement>) => {
    setIsLoading(true);
    e.preventDefault();
    const {title, description, image, gitUrl} = e.currentTarget.elements;

    const file = image.files?.item(0);
    
    if(file){
      const { data : imgdata, error: imgUploadError} = await client
                                          .storage
                                          .from("projects")
                                          .upload(`public/${nanoid()}_${file.name}`, file);

      if(!imgUploadError){
        const {data : {publicUrl}} = client.storage.from("projects").getPublicUrl(imgdata.path);      
        
        if(publicUrl){
          const { status, error } = await client.from("projects").insert({
            title: title.value,
            description: description.value,
            gitUrl : gitUrl.value,
            image: publicUrl
          });

          if(!error){
            title.value = "";
            description.value = "";
            gitUrl.value = "";
            image.value = "";

            setNotification("Project created succesfully!");
            setIsLoading(false);
          }
          else {
            setNotification("project Is not saved, try again");
          }
        }
        else {
          setNotification("The public url has not been created!");
        }
      }
      else {
        setNotification("The image has not been save, try again!");
      }  
    }
    else{
      setNotification("The file must be present!");
      setIsLoading(false);
    }
  }
  
  return (
    <div>
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
    </div>
  );
}

export default AdminDashboard;
