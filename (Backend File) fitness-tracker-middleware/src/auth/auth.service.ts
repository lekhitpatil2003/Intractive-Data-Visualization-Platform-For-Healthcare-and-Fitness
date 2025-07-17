import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { RegisterDto } from './register.dto';
import { LoginDto } from './login.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService, private jwtService: JwtService) {}

  async register(registerDto: RegisterDto) {
    const finalPayload = {...registerDto, fitnessLevel:"beginner", goalDuration:15}
    const user = await this.userService.create(registerDto);
    const payload = { sub: user._id, email: user.Email_Id };
    return {
        statusCode:200,
        message:"User Successfully Registerd..."
    };
  }

  async login(loginDto: LoginDto) {
    console.log({loginDto})
    const user = await this.userService.findByEmailPassword(loginDto.Email_Id, loginDto.password);
    if (!user) {
        throw new UnauthorizedException('Invalid credentials');
    }
  console.log({user})

    const payload = { sub: user._id, email: user.Email_Id };
    return {
      token: this.jwtService.sign(payload),
      user,
    };
  }
}