import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], //Utilizaremos la entidad User en todo el modulo de users
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
