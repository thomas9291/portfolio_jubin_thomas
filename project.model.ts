export interface Project {
  projectId: string;
  date: string;
  programs: string[];
  title: string;
  description: string;
  videoURL: string;
  linkURL: string;
  codeURL: string;
}
export interface ProjectObj {
  date?: string | null;
  title?: string | null;
  programs?: React.JSX.Element[] | null;
  description?: string | null;
  videoURL?: string | null;
  linkURL?: string | null;
  codeURL?: string | null;
}

export interface certificats {
  certificatId: string;
  imagePath: string;
}

export interface certificatDetail {
  certificatId?: string | null;
  imagePath?: string | null;
  title?: string | null;
  date?: string | null;
  description?: string | null;
  linkURL?: string | null;
}
