// jwt.strategy.ts

import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService, private jwtService: JwtService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Ensure this is set in your environment variables
    });
  }

  async validate(payload: any) {
    // This method is called to validate the JWT payload
    // You can also verify the user or do any additional logic
    const user = await this.authService.validateUserById(payload.sub);
    if (!user) {
      throw new Error('Invalid token');
    }
    return user; // This will be attached to the request as 'user'
  }
}
