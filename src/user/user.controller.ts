import { Body, Controller, Post } from "@nestjs/common";

@Controller('users')
export class UserController{

    @Post()
    setHello(@Body() body): string {
      return body;
    }

}