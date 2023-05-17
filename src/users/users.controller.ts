import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
	
	constructor(private UsersService: UsersService){}

	@Post()
	addUser(@Body() data: CreateUserDto){
		return this.UsersService.addUser(data);		
	}
}
