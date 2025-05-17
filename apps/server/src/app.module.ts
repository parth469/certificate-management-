import { Module } from '@nestjs/common';
import { V0modules } from './v0/v0.module';

@Module({
  imports: [
    V0modules
  ],
})
export class AppModule {}