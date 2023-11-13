import { Body, Controller, Post, Get, Patch, Put, Param, Delete } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";
import { UpdatePutUserDTO } from "./dto/update-put-user.dto";

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
    async update(@Body() {email, name, password}: UpdatePutUserDTO , @Param() param){
      return {
        method: 'put',
        email, name, password,
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