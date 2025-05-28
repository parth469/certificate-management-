import { Module } from "@nestjs/common";
import { V0Controller } from "./v0.controller";
import { AdminModule } from "./users/admin.module"
import { TenantModule } from "./tenant/tenant.module";
import { ClientModule } from "./client/client.module";

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