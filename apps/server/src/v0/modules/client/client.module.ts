import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";


const CLIENT_MODULES = [];


@Module({
    imports: [
        ...CLIENT_MODULES,
        RouterModule.register([
            {
                path: "client",
                module: ClientModule,
                children: []
            },
        ]),
    ],
    controllers: []
})

export class ClientModule { }