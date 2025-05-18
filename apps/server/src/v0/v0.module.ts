import { Module } from "@nestjs/common";
import { V0Controller } from "./v0.controller";
import { AdminModule } from "./modules/users/user.module"
import { TenantModule } from "./modules/tenant/tenant.module";
import { ClientModule } from "./modules/client/client.module";

const V0_SUBMODULES = [
  AdminModule,
  TenantModule,
  ClientModule
];

@Module({
  imports: V0_SUBMODULES,
  controllers: [V0Controller]
})

export class V0modules { }