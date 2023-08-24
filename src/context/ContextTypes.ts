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
          images : Array<String>
          gitUrl: string
        }
        Insert: {
          title : string
          description : string
          images : Array<String>
          gitUrl: string
        } 
        Update: {
          title : string
          description : string
          images : Array<String>
          gitUrl: string
        } 
      },

      forms: {
        Row: {
          email : string
          title : string
          message : string
          gitUrl: string
        }
        Insert: {
          email : string
          title : string
          message : string
          gitUrl: string
        } 
        Update: {
          email : string
          title : string
          message : string
          gitUrl: string
        } 
      }
    }
  }
}

interface AdminFormPayload extends HTMLFormControlsCollection{
  email: HTMLInputElement
  password : HTMLInputElement
}

export interface AdminForm extends HTMLFormElement{
  readonly elements : AdminFormPayload
}