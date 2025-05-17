import { Module } from "@nestjs/common";
import { UserModule } from "./modules/user/user.module";
import { LogModule } from "./modules/log/log.module";

const V0_SUBMODULES = [
  UserModule,
  LogModule,
];

@Module({
  imports: V0_SUBMODULES,
})

export class V0modules {}