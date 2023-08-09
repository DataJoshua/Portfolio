import { useContext, useEffect, useState } from "react";
import { SupaContext } from "../context/SupaContext";
import { Payload } from "../context/ContextTypes";
import { Session } from "@supabase/supabase-js";
import AdminLoginPage from "./admin/AdminLoginPage";

const Admin = () => {

  const {client} = useContext(SupaContext) as Payload;

  const [session, setSession] = useState<Session | null>(null)

  const handleLogOut = async ()=> {
    const {error} = await client.auth.signOut();

    if(!error){
      console.log("sign out");
    }
  }

  useEffect(() => {
    client.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  if(!session) return <AdminLoginPage/>

  return <>
    <button onClick={handleLogOut}>Log Out</button>
  </>
};

export default Admin;