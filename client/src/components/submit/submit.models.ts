export interface ArtifactSubmit {
  owner_name: string;
  owner_email: string;
  name: {
    primary: string;
    alternate?: string;
  };
  location: string;
  description: string;
  size?:{
    width: string;
    height: string;
    depth: string;
    estimate: string;
  };
  is_owned?: boolean;
  is_in_posession?: boolean;
  can_access_for_research?: boolean;
  can_loan_temporarily?: boolean;
  can_loan_permanent?: boolean;
  materials?: string;
  creation?: {
    who: string;
    when: string;
    where: string;
  };
  history?:  string;
  acquisition?: string;
  use?: string;
  significance: string;
  owner_history?: string;
};
