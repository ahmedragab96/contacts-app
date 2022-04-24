import { IUser } from "./src/models/user/types";

declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
