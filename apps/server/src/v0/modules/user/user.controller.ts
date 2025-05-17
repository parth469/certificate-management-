import { All, Controller ,Get, Req, Res} from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('users')
export class UserController {
    @Get()
    fetchAllUser():string[]{
        return ["hello"]
    }
}
