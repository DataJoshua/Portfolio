import { SupabaseClient } from "@supabase/supabase-js";
import { ReactNode } from "react";

export interface SupaContextProps {
  children : ReactNode
}

export interface Payload {
  client : SupabaseClient<Database, "public", any>
}

export interface Database {
  public: {
    Tables: {
      forms: {
        Row: {
          email : string
          title : string
          message : string
        }
        Insert: {
          email : string
          title : string
          message : string
        } 
        Update: {
          email : string
          title : string
          message : string
        } 
      }
    }
  }
}