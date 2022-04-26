import { Document, Model } from "mongoose";

export interface IUser extends Document {
  email: string;
  password: string;
  findByEmail: (emailAddress: string, options: Record<string, unknown>) => Promise<IUser>;
  comparePassword: (password: string) => Promise<boolean>;
}

export interface UserModel extends Model<IUser> {
  findByEmail: (emailAddress: string, options: Record<string, unknown>) => Promise<IUser>;
  comparePassword: (password: string) => Promise<boolean>;
}