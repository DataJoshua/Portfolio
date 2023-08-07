import { createContext } from "react";
import { Payload } from "./ContextTypes";

export const SupaContext = createContext<Object | Payload >("supaContext");
