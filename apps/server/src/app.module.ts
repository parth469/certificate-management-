import { MiddlewareConsumer, Module, NestModule, RequestMethod, VersioningType } from '@nestjs/common';
import { V0modules } from './v0/v0.module';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { AuthMiddleware } from './v0/middleware/auth.middleware';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware)
      .exclude(
        { path: '*splat/login', method: RequestMethod.POST },
        { path: '*splat/health', method: RequestMethod.ALL }
      )
      .forRoutes({ path: '*splat', method: RequestMethod.ALL });
  }
}