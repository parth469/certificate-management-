import { Module } from '@nestjs/common';
import { Log } from './log';
import { LogController } from './log.controller';

@Module({
  providers: [Log],
  controllers: [LogController]
})
export class LogModule {}
