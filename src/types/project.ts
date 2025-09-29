export interface Project {
  id?: string;
  title: string;
  description?: string | null;
  tech: string[];
  image_url?: string | null;
  code_url?: string | null;
  live_url?: string | null;
  created_at?: string;
}
