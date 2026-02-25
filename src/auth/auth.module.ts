import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModuleOptions } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { config } from 'process';


@Module({
  imports: [PrismaModule,
    PassportModule,
    JwtModule.registerAsync({
      imports:[ConfigModule],
      inject: [ConfigService],
      useFactory:async (configService: ConfigService): Promise<JwtModuleOptions> =>{
      const secret= configService.get<string>('JWT_SECRET');
      const expiresIn= configService.get<string>('JWT_EXPIRES_IN');
      if(!secret){
        throw new Error('JWT_SECRET is not defined');
      }
      return {
        secret,
        signOptions: { expiresIn: expiresIn as any},
      }
    },
})
],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController]
})
export class AuthModule {}
