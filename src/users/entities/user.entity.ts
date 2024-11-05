import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Roles } from './role.entity';

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column()
    roleId: number;

    @ManyToOne(() => Roles, (role) => role.users)
    @JoinColumn({ name: 'roleId' })
    role: Roles;
  
    @Column({ unique: true }) // Ensure usernames are unique
    username: string;

    @Column({ unique: true, nullable: true }) // Ensure emails are unique
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ nullable: true })
    createdAt: Date;

    @UpdateDateColumn({ nullable: true })
    updatedAt: Date;

 
}
