import {TypeOrmModuleOptions} from '@nestjs/typeorm'
export const config: TypeOrmModuleOptions ={
    type:'postgres',
    username: 'postgres',
    password: 'santos20',
    port: 5432,
    host:'127.0.0.1',
    database: 'trading',
    synchronize: true, //false if creating in production level
    entities: ['dist/**/*.entity{.ts,.js}'],
};