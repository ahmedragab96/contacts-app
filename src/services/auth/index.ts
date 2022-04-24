// import { User } from '../../models/userModel';
import jwt from 'jsonwebtoken';
import { config } from '../../config/env';
import { User } from '../../models'; 
import { IUser } from '../../models/user/types';

export class AuthService {
  private static instance: AuthService;

  public static get Instance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async register(email: string, password: string): Promise<IUser> {
    let user = await User.findByEmail(email, {});
    if (user) {
      throw new Error('User already exists');
    }
    user = await User.create({
      email,
      password,
    });
    user.save();
    return user;
  }

  public async login(): Promise<void> {
    // if (!user) {
    //   const token = this._generateAuthToken(userData.username);
    //   userData.accessToken = token;

    //   user = userData;
    // } else {
    //   if (userData.password !== user.password) {
    //     throw 'Wrong Password';
    //   }
    // }
    // return user;
  }

  _generateAuthToken(userId: string) {
    const { jwtSecret } = config;
    const token = jwt.sign(
      {
        id: userId,
      },
      jwtSecret,
    );
    return token;
  }
}
