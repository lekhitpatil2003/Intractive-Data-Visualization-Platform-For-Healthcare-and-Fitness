import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class LoginDto {
    @ApiProperty({
          description: 'User Email Id',
          example: 'LekhitPatil@gmail.com',
    })
    @IsString()
    Email_Id: string;

    @ApiProperty({
        description: 'Enter User Password',
        example: 'pass@123',
    })
    password: string;
}