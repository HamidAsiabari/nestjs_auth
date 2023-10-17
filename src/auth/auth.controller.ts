import { Controller, Request, Post, UseGuards} from '@nestjs/common';

import { AuthService } from './auth.service';
import { Public } from './auth.decorators';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('signin')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }
    
    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('signup')
    async signup(@Request() req) {
        return req.user;
    }
}
