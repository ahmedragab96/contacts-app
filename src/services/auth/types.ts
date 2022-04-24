import { IUser } from "../../models/user/types";

export interface AuthUser {
  id: string;
  email: string;
  tokens: {
    accessToken: string;
  };
}
