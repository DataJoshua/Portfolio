import { FormEvent, useContext, useEffect, useState } from "react";
import FrameContainer from "../../containers/FrameContainer";
import FormInput from "../../organisms/FormInput";
import { SupaContext } from "../../context/SupaContext";
import { AdminForm, Payload } from "../../context/ContextTypes";
import { Session } from "@supabase/supabase-js";

const AdminLoginPage = () => {
  
  const {client} = useContext(SupaContext) as Payload;
  
  const handleLogIn = async (e : FormEvent<AdminForm>) => {
    e.preventDefault();

    const {email, password} = e.currentTarget.elements;

    const {data, error} = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    
    if(!error){
      console.log(data);
    }
  }

  return (
    <FrameContainer>
      <div className="flex justify-center">
        <div className="max-w-sm">
          <h1 className="my-8 text-center text-3xl">Login</h1>
          <div>
            <h2>Signed in</h2>
          </div>
          <form method="post" onSubmit={handleLogIn}>
            <FormInput label="email" name="email" state/>
            <FormInput label="password" name="password" type="password" submitLabel="Log in" isSubmit state />
          </form>
 =        </div>
      </div>
    </FrameContainer>
  );
};

export default AdminLoginPage;