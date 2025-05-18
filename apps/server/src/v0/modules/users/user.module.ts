import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core"; // 👈 Add this
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";

const ADMIN_MODULES = [UserModule, RoleModule];

@Module({
    imports: [
        ...ADMIN_MODULES,
        RouterModule.register([
            {
                path: "admin",
                module: AdminModule,
                children: [
                    { path: "/users", module: UserModule },
                    { path: "/roles", module: RoleModule },
                ],
            },
        ]),
    ],
    controllers: [],
})
export class AdminModule { }