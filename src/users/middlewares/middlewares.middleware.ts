import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class MiddlewaresMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log("Test Middleware:");
    next();
  }
}
