import { Database, SupaContextProps } from "./ContextTypes"
import { SupaContext } from "./SupaContext"
import { createClient } from "@supabase/supabase-js"

const SupaProvider = ({ children } : SupaContextProps ) => {
  const client = createClient<Database>(process.env.REACT_APP_SUPA_URL as string, process.env.REACT_APP_SUPA_KEY as string);
  
  return(
    <SupaContext.Provider value={{client}}>
      {children}
    </SupaContext.Provider>
  )
}

export default SupaProvider;
