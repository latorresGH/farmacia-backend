import { Injectable, NestMiddleware } from '@nestjs/common';

const requests = new Map<string, number>();

@Injectable()
export class RateLimitMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const ip = req.ip;

    const now = Date.now();
    const last = requests.get(ip) || 0;

    // 1 request cada 2 segundos
    if (now - last < 2000) {
      return res.status(429).json({
        message: 'Too many requests',
      });
    }

    requests.set(ip, now);

    next();
  }
}