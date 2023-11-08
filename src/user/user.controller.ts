import { Body, Controller, Post, Get, Patch, Put, Param, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

@Controller('users')
export class UserController{

    @Post()
    async create(@Body() body: CreateUserDTO) {
      return body;
    }

    @Get()
    async list(){
      return {users:[]}
    }

    @Get(':id')
    async show(@Param() param){
      return {user:{}, param}
    }

    @Put()
    async update(@Body() body, @Param() param){
      return {
        method: 'put',
        body,
        param
      }
    }

    @Patch(':id')
    async updatePartial(@Body() body, @Param() param){
      return {
        method: 'patch',
        body,
        param
      }
    }

    @Delete(':id')
    async delete(@Param() param){
      return {
        param
      }
    }

}