import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    AuthModule, UsersModule],
  controllers: [ AuthController],
  providers: [ AuthService, UsersService],
})
export class AppModule {}
