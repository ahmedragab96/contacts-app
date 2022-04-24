import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { config } from "../../config/env";
import { User } from "../../models";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let accessToken;
    const authHeader = req.headers.authorization;
    if (
      authHeader &&
      authHeader.split(" ")[0] === "Bearer" &&
      authHeader.split(" ")[1]
    ) {
      accessToken = authHeader.split(" ")[1];
    } else {
      throw "Unauthorized Access";
    }
    const decoded: any = jwt.verify(accessToken, config.jwtSecret);
    const user = await User.findById(decoded.id);

    // access denied if user doesn't exist
    if (!user) {
      throw "Unauthorized Access";
    }

    console.log(user);
    next();
  } catch (error) {
    return res.status(401).json({
      message: error,
    });
  }
};
