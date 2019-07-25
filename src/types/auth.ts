export interface IAuth {
  mobile: string;
  userExists: boolean;
  token: string;
  isLoading: boolean;
  message?: string;
}
