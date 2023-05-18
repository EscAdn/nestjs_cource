import { Entity, Column, OneToMany } from 'typeorm';
import { EntityColums } from './../../config/config.entity';
import { IProject } from './../../interfaces/project.interface';
import { UserProjectsEntity } from './../../users/entities/userProjects.entity';

@Entity({name: 'projects'})
export class Project extends EntityColums implements IProject{
	@Column()
	name: string;

	@Column()
	descriptions: string;

	@OneToMany(() => UserProjectsEntity, (userProjects) => userProjects.project)
	userInclude: UserProjectsEntity;
}