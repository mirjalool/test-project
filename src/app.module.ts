import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaModule } from 'nestjs-prisma';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    PrismaModule.forRoot({
      isGlobal: true
    }), 
    UserModule, AuthModule
  ],
})
export class AppModule {}
