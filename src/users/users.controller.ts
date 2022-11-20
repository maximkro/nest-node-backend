import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';
import { UsersService } from './users.service';


@ApiTags('users')
@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }


    @ApiOperation({ summary: 'create user' })
    @ApiResponse({ status: 201, type: User })
    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.usersService.createUser(userDto);
    }
    @ApiOperation({ summary: 'get users' })
    @ApiResponse({ status: 200, type: [User] }) // type array
    @Get()
    getAll() {
        return this.usersService.getAllUsers();
    }
}
