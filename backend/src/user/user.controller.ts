import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }
    @Get(":id")
    async getUserById(@Param("id") id: string) {
        try {
            const user = await this.userService.getUser(id)
            return user
        } catch (error) {
            console.log(error)
        }
    }
    @Post("add")
    async addUser(
        @Body("name") name: any,
        @Body("surname") surname: any,
        @Body("email") email: any,
        @Body("password") password: any,

    ) {
        //User type 1 standard kullnıcı
        try {
            return await this.userService.addUser(name, surname, email, password, 1)
        } catch (error) {
            console.log(error)
        }
    }
    @Delete("delete")
    async deleteUser(
        @Body("id") id: any
    ) {
        try {
            return await this.userService.deleteUser(id)
        } catch (error) {
            console.log(error)
        }
    }

}
