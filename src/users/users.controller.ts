
import { Controller, Get, Request, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    @Get('profile')
    getProfile(@Request() req) {
        return this.userService.findOne(req.user.username);
    }

}
