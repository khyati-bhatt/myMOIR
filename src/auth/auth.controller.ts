import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UseGuards, Get, Request } from '@nestjs/common';
import { JwtAuthGuard } from './jwt.strategy/jwt.guard';


@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(
    @Body('email') email: string,
    @Body('password') password: string,
  ) {
    return this.authService.register(email, password);
  }
  @Post('login')
    async login(
    @Body('email') email: string,
    @Body('password') password: string,
    ) {
    return this.authService.login(email, password);
    }
    @Get('me')
    @UseGuards(JwtAuthGuard)
    getProfile(@Request() req) {
    return req.user;
}
}


