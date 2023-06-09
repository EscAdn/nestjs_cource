import { Entity, Column, OneToMany } from 'typeorm';
import { EntityColums } from './../../config/config.entity';
import { IUser } from './../../interfaces/user.interface';
import { ROLES } from './../../constans/roles';
import { UserProjectsEntity } from './userProjects.entity';

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

    @Column({ type: 'enum', enum: ROLES })
    role: ROLES;

    @OneToMany(() => UserProjectsEntity, (userProjects) => userProjects.user)
    projectsInclude: UserProjectsEntity[];

}