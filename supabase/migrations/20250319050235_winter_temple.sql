/*
  # CMS and SEO Database Schema

  1. New Tables
    - `pages`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `title` (text)
      - `description` (text)
      - `content` (jsonb)
      - `meta_title` (text)
      - `meta_description` (text)
      - `meta_keywords` (text[])
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `page_sections`
      - `id` (uuid, primary key)
      - `page_id` (uuid, foreign key)
      - `name` (text)
      - `content` (jsonb)
      - `order` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated admin access
*/

-- Create pages table
CREATE TABLE IF NOT EXISTS pages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  description text,
  content jsonb DEFAULT '{}',
  meta_title text,
  meta_description text,
  meta_keywords text[],
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create page_sections table
CREATE TABLE IF NOT EXISTS page_sections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  page_id uuid REFERENCES pages(id) ON DELETE CASCADE,
  name text NOT NULL,
  content jsonb DEFAULT '{}',
  "order" integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE page_sections ENABLE ROW LEVEL SECURITY;

-- Create policies for pages
CREATE POLICY "Allow public read access to pages"
  ON pages
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage pages"
  ON pages
  USING (auth.role() = 'authenticated');

-- Create policies for page_sections
CREATE POLICY "Allow public read access to page sections"
  ON page_sections
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow authenticated users to manage page sections"
  ON page_sections
  USING (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_pages_updated_at
  BEFORE UPDATE ON pages
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_page_sections_updated_at
  BEFORE UPDATE ON page_sections
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();