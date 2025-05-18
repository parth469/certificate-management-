import { Controller, Get, HttpStatus } from "@nestjs/common";

@Controller()
export class V0Controller {
    @Get("health")
    serverStatus() {
        return { status: HttpStatus.OK }
    }
}