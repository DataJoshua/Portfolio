import { FormEvent, useContext, useState } from "react";
import { SupaContext } from "../../context/SupaContext";
import { Payload } from "../../context/ContextTypes";
import FormInput from "../../organisms/FormInput";
import { ProjectFormElement } from "../../types/AdminTypes";
import { nanoid } from "nanoid";
import { error, log } from "console";

function AdminDashboard() {
 
  const {client} = useContext(SupaContext) as Payload;
  const [errors, setErrors] = useState<boolean>(false)

  const handleOnSubmit = async (e : FormEvent<ProjectFormElement>) => {
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
          })

          console.log(status, error);
          
        }
      }     
    }
    else{
      setErrors(true);
    }
  }

  return (
    <div>
      <h1 className="text-3xl text-center my-8">Create new Project</h1>
      <div className="max-w-lg m-auto">
        <form action="post" onSubmit={handleOnSubmit}>
          <FormInput label="title" name="title" state/>
          <FormInput label="description" name="description" state/>
          <FormInput label="repo url" name="gitUrl" state/>
          <FormInput label="image" name="image" type="file" isSubmit state/>
        </form>
      </div>
    </div>
  );
}

export default AdminDashboard;
