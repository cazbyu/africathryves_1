export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      pages: {
        Row: {
          id: string
          slug: string
          title: string
          description: string | null
          content: Json
          meta_title: string | null
          meta_description: string | null
          meta_keywords: string[] | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          description?: string | null
          content?: Json
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string | null
          content?: Json
          meta_title?: string | null
          meta_description?: string | null
          meta_keywords?: string[] | null
          created_at?: string
          updated_at?: string
        }
      }
      page_sections: {
        Row: {
          id: string
          page_id: string
          name: string
          content: Json
          order: number
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          page_id: string
          name: string
          content?: Json
          order: number
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          page_id?: string
          name?: string
          content?: Json
          order?: number
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}