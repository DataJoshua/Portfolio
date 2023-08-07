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
      projects: {
        Row: {
          title : string
          description : string
          image : string
        }
        Insert: {
          title : string
          description : string
          image : string
        } 
        Update: {
          title : string
          description : string
          image : string
        } 
      },

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