import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";


const TENANT_MODULES = []


@Module({
    imports: [
        ...TENANT_MODULES,
        RouterModule.register([
            {
                path: "tenant",
                module: TenantModule,
                children: []
            },
        ]),
    ],
    controllers: []
})

export class TenantModule { }