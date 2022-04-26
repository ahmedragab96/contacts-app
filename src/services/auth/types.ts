export interface AuthUser {
  id: string;
  email: string;
  tokens: {
    accessToken: string;
  };
}
