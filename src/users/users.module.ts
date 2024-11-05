import { Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Roles } from './entities/role.entity';
import { MiddlewaresMiddleware } from './middlewares/middlewares.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User, Roles])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule  implements NestModule{
  configure(consumer:MiddlewareConsumer){
    consumer.apply(MiddlewaresMiddleware).forRoutes('users')
  }
}
