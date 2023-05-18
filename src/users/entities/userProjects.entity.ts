import { Entity, Column, ManyToOne } from 'typeorm';
import { EntityColums } from './../../config/config.entity';
import { ACCESS_LEVEL } from './../../constans/roles';
import { User } from './../entities/users.entity';
import { Project } from './../../projects/entities/projects.entity';

@Entity({name: 'user_projecst'})
export class UserProjectsEntity extends EntityColums{
	@Column({type: 'enum', enum: ACCESS_LEVEL})
	accessLevel: ACCESS_LEVEL;

	@ManyToOne(() => User, (user) => user.projectsInclude)
	user: User;

	@ManyToOne(() => Project, (proj) => proj.userInclude)
	project: Project;
}