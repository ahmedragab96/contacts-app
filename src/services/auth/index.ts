// import { User } from '../../models/userModel';
import jwt from 'jsonwebtoken';
import { config } from '../../config/env';
import { User } from '../../models'; 
import { AuthUser } from './types';

export class AuthService {
  private static instance: AuthService;

  public static get Instance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async register(email: string, password: string): Promise<AuthUser> {
    let user = await User.findByEmail(email, {});
    if (user) {
      throw new Error('User already exists');
    }
    user = await User.create({
      email,
      password,
    });
    const accessToken = this._generateAuthToken(user._id);

    return {
      email: user.email,
      id: user._id,
      tokens: {
        accessToken,
      }
    };
  }

  public async login(email: string, password: string): Promise<AuthUser> {
    const user = await User.findByEmail(email, {});

    if (!user || !user.comparePassword(password)) {
      throw new Error("Wrong Email/Password");
    }

    const accessToken = this._generateAuthToken(user._id);
    return {
      email: user.email,
      id: user._id,
      tokens: {
        accessToken,
      }
    };
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
