import { Entity, Column } from 'typeorm';
import { EntityColums } from './../../config/config.entity';
import { IUser } from './../../interfaces/user.interface'

@Entity({name: 'users'})
export class User extends EntityColums implements IUser{
	@Column()
	firstName: string;

	@Column()
	lastName: string;

	@Column()
	age: number;

	@Column({ unique: true })
	email: string;

	@Column({ unique: true })
	username: string;
	
	@Column()
	password: string;
}