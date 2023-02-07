export interface IUserDetailsResponse {
  pageNumber: number;
  totalPage: number;
  users: IUserDetails[];
}

export interface IUserDetails {
  email: string;
  employeeCode: string;
  mobile: number;
  name: string;
  project: IProject[];
}
export interface IProject {
  id: number;
  project: string;
}
