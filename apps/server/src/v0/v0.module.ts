import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { LogModule } from "./modules/log/log.module";
import { V0Controller } from "./v0.controller";

const V0_SUBMODULES = [
  UserModule,
  LogModule,
];

@Module({
  imports: V0_SUBMODULES,
  controllers: [V0Controller]
})

export class V0modules { }