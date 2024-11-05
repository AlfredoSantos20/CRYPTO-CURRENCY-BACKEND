import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('roles')
export class Roles {
    @PrimaryGeneratedColumn()
    roleId: number;
  
    @Column()
    roleName: string;

    @CreateDateColumn({ nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

    @OneToMany(() => User, (user) => user.role)
    users: User[];
}
