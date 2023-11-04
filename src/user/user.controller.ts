import { Body, Controller, Post, Get } from "@nestjs/common";
import { Param } from "@nestjs/common/decorators/http/route-params.decorator";

@Controller('users')
export class UserController{

    @Post()
    async setHello(@Body() body) {
      return body;
    }

    @Get()
    async list(){
      return {users:[]}
    }

    @Get(':id')
    async readOne(@Param() param){
      return {user:{}}
    }

}