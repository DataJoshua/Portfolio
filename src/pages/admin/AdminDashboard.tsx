import { useContext } from "react";
import { SupaContext } from "../../context/SupaContext";
import { Payload } from "../../context/ContextTypes";

function AdminDashboard() {
 
  const {client} = useContext(SupaContext) as Payload;

  const handleOnLogOut = async () => {
    const { error } = await client.auth.signOut();

    if(!error){
      console.log("loged out");
    }
  }
  
  return (
    <div>
      <button onClick={handleOnLogOut}>Log Out</button>
    </div>
  );
}

export default AdminDashboard;
