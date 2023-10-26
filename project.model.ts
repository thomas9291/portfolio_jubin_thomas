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
  date?: string;
  title?: string;
  programs?: React.JSX.Element[];
  description?: string;
  videoURL?: string;
  linkURL?: string;
  codeURL?: string;
}

export interface certificats {
  imagePath: string;
}

export interface certificatDetail {
  certificatId?: string;
  imagePath?: string;
  title?: string;
  date?: string;
  description?: string;
  linkURL?: string;
}
