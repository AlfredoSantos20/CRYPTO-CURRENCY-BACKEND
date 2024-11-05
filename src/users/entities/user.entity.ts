import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';


@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    userId: number;
  
    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn({ nullable:true })
    createdAt: Date;

    @UpdateDateColumn({ nullable:true })
    updatedAt: Date;

}