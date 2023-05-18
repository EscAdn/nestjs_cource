import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';

@Injectable()
export class UsersService {
	constructor(@InjectRepository(User) private userRepository: Repository<User>){}

	getUsers():Promise<User[]>{
		return this.userRepository.find();
	}

	getUser(id: string):Promise<User | null>{
		return this.userRepository.findOneBy({id});
	}

	addUser(user: CreateUserDto){
		const data = this.userRepository.create(user);
		return this.userRepository.save(data);
	}

	// updateUser(data:User):Promise<User>{
	// 	return this.userRepository.delete(data);
	// }

	deleteUser(id: string){
		return this.userRepository.delete(id)
	}
}
