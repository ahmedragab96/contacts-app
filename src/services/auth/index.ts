// import { User } from '../../models/userModel';
import jwt from 'jsonwebtoken';
import { config } from '../../config';

export class AuthService {
  private static instance: AuthService;

  public static get Instance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async register(): Promise<void> {
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

  _generateAuthToken(username: string) {
    const { jwtSecret } = config;
    const token = jwt.sign(
      {
        id: username,
      },
      jwtSecret,
    );
    return token;
  }
}
