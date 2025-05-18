import { Module } from '@nestjs/common';
import { V0modules } from './v0/v0.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

const rateLimiter = [
  {
    ttl: 60000,
    limit: 1
  }
]
@Module({
  imports: [
    V0modules, ThrottlerModule.forRoot({
      throttlers: rateLimiter,
      errorMessage(context, throttlerLimitDetail) {
        const { timeToExpire, limit, ttl } = throttlerLimitDetail;
        const seconds = timeToExpire

        const timeString = seconds > 60
          ? `${Math.ceil(seconds / 60)} minute(s)`
          : `${seconds} second(s)`;

        return `Too many requests ! You've exceeded the request limit of ${limit} requests per ${ttl / 1000} seconds. Try again after ${timeString}`
      }
    }
    )
  ],
  providers: [
    {
      useClass: ThrottlerGuard,
      provide: APP_GUARD
    }
  ]
})
export class AppModule { }