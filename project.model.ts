export interface Project {
  projectId: string;
  date: string;
  title: string;
  description: string;
  videoURL: string;
  linkURL: string;
  codeURL: string;
}
export interface ProjectObj {
  date?: string | null;
  title?: string | null;
  description?: string | null;
  videoURL?: string | null;
  linkURL?: string | null;
  codeURL?: string | null;
}
