import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    if (!token) {
      throw new UnauthorizedException("Authorization token missing");
    }

    // TODO: Validate Token

    next();
  }
}
